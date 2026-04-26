import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import styles from "./CreateCollection.module.css"
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import type { Category } from '../../models/category';
import Select from 'react-select';
import { getAllCategories } from '../../api/categoryApi';
import { useToast } from '../../context/Toast/ToastContext';
import { postCardCollection } from '../../api/cardsApi';
import { useLoginContext } from '../../context/Login/LoginContext';
import { v4 as uuidv4 } from 'uuid';


type Inputs = {
  title: string,
  desc?: string,
  categories: Category[]
}

export default function CreateCollection() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      desc: "",
      categories: []
    }
  })

  const navigate = useNavigate();
  const { addToast } = useToast()
  const {loginInfo} = useLoginContext()

  


  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const cat = await getAllCategories()
        setCategories(cat)
      } catch (error) {
        // just keep it empty...
      }
    }
    load()
  }, [])


  const onSubmit: SubmitHandler<Inputs> = async (data) => {   
    try {
      if (!loginInfo) {
        throw new Error("Nicht eingeloggt!")
      }
      const collection = await postCardCollection(loginInfo.userId, data.title, data.desc, data.categories)
      navigate(`/collection/${collection.collectionId}`)
      addToast({
        id: uuidv4(),
        message: "Sammlung erstellt!",
        type: "SUCCESS"
    })
    } catch (error) {
      addToast({
        id: uuidv4(),
        message: "Fehler beim Erstellen der Sammlung.",
        type: "ERROR"
    })
    }
  }


  function onCancel() {
    navigate(-1);
  }

  return (
    <div className={styles.whole}>
      <h2>Sammlung erstellen</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor='title'>Titel</label>
          <input id='title' {...register("title", {
            required: "Pflichtfeld",
            maxLength: {
              value: 20,
              message: "Maximal 20 Zeichen"
            }
          })} placeholder='Titel eingeben...' className={styles.inputLocal} />
          {errors.title && <p> {errors.title.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='desc'>Beschreibung</label>
          <textarea id='desc' {...register("desc", {
            maxLength: {
              value: 200,
              message: "Maximal 200 Zeichen"
            }
          })
          }placeholder='Beschreibung eingeben...' className={styles.textarea} />
          {errors.desc && <p>errors.desc.message</p>}

        </div>



        <div className={styles.inputGroup}>
          <label htmlFor='category'>Kategorien auswählen</label>
          <Controller
            control={control}
            name="categories"
            render={({ field }) => (
              <Select
                placeholder="Suche nach Kategorien..."
                className={styles.select}
                isMulti
                options={categories}
                value={field.value}
                onChange={(value) => field.onChange(value)}
                id='category'
              />
            )}
          />
        </div>

        <div className={styles.buttons}>
          <button type='submit' className={styles.submit}>
            Erstellen
          </button>
          <button type='reset' className={styles.cancel} onClick={onCancel}>
            Abbrechen
          </button>
        </div>
      </form>
    </div>
  )
}