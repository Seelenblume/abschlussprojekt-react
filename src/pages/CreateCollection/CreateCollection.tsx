import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import styles from "./CreateCollection.module.css"
import type { CardModel } from '../../models/card';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import type { Category } from '../../models/category';
import Select from 'react-select';
import { getAllCategories } from '../../api/categoryApi';
import { useToast } from '../../context/Toast/ToastContext';
import { postCardCollection } from '../../api/cardsApi';
import { useLoginContext } from '../../context/Login/LoginContext';

type Inputs = {
  title: string,
  desc?: string,
  cards: CardModel[],
  categories: Category[]
}

const CreateCollection = () => {

  const navigate = useNavigate();
  const { addNotification } = useToast()
  const {loginInfo} = useLoginContext()

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



  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const cat = await getAllCategories()
        setCategories(cat)
      } catch (error) {
        // just keep it empty...
        // console.log(error)
      }
    }
    load()
  }, [])


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
   


    try {
      if (!loginInfo) {
        throw new Error("Not logged in")
      }
      const collection = await postCardCollection(loginInfo.userId, data.title, data.desc, data.categories)
      navigate(`/collection/${collection.collectionId}`)

      addNotification({
        id: `${Date.now()}nwrpgvnbwr`,
        message: "Collection created!",
        type: "SUCCESS"
    })
    } catch (error) {
      console.log(error);
      addNotification({
        id: `${Date.now()}nwrpgvnbwr`,
        message: (error as Error).message,
        type: "ERROR"
    })
    }
  }


  function onCancel() {
    navigate(-1);
  }

  return (
    <div className={styles.whole}>
      <h2>Create a Collection</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor='title'>Title of your collection</label>
          <input id='title' {...register("title", {
            required: "This field is required",
            maxLength: {
              value: 20,
              message: "Maximum of 20 characters"
            }
          })} placeholder='Enter Title...' className={styles.inputLocal} />
          {errors.title && <p> {errors.title.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='desc'>Description</label>
          <textarea id='desc' {...register("desc", {
            maxLength: {
              value: 200,
              message: "Maximum of 200 characters"
            }
          })
          } className={styles.textarea} />
          {errors.desc && <p>errors.desc.message</p>}

        </div>



        <div className={styles.inputGroup}>
          <label htmlFor='category'>Categories</label>
          <Controller
            control={control}
            name="categories"
            rules={{
              max: 5,
            }
            }
            render={({ field }) => (
              <Select
                placeholder="Search for Categories..."
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

export default CreateCollection 