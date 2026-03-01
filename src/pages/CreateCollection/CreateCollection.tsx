import React, { useEffect, useState } from 'react'
import { postCardCollection } from '../../api/cardsApi'
import { data, useNavigate } from 'react-router';
import styles from "./CreateCollection.module.css"
import { LucidePlus } from 'lucide-react';
import type { CardModel } from '../../models/card';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import type { Category } from '../../models/category';
import Select from 'react-select';
import { getAllCategories } from '../../api/categoryApi';

type Inputs = {
  title: string,
  desc?: string,
  cards: CardModel[],
  categories: Category[]
}

const CreateCollection = () => {

  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      desc: "",
      cards: [],
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
        console.log(error)
      }
    }
    load()
  }, [])

  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    // try {
    //   const url = await postCardCollection(collectionData.title, collectionData.desc, [])
    //   navigate(url,)
    // } catch (error) {
    //   console.log(error);
    // }
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
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='desc'>Description (max 200 chars)</label>
          <textarea id='desc' {...register("desc", {
            maxLength: {
              value: 200,
              message: "Maximum of 200 characters"
            }
          }) 
          } className={styles.textarea} />
        </div>

        

        <div className={styles.inputGroup}>
          <label htmlFor='category'>Categories</label>
          <Controller
            control={control}
            name="categories"
            render={({field}) => (
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