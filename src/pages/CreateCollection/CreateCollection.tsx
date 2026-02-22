import React, { useState } from 'react'
import { postCardCollection } from '../../api/cardsApi'
import { useNavigate } from 'react-router';
import styles from "./CreateCollection.module.css"
import type { CardModel } from '../../models/card';
import { LucidePlus } from 'lucide-react';


const defaultData = {
  name: ""
}


const CreateCollection = () => {

  const navigate = useNavigate();

  const [collectionData, setCollectionData] = useState({
    title: "",
    desc: "",
    cards: [],
  })

  const [categories, setCategories] = useState([{ ...defaultData }]);

  // https://medium.com/@amitsharma_24072/handling-multiple-inputs-in-reactjs-best-practices-for-react-js-input-forms-9b973f4beb7e
  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault()
    const { name, value } = event.target;
    setCollectionData((prev) => ({
      ...prev,
      [name]: value
    })
    )
    console.log(collectionData);
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    try {
      const url = await postCardCollection(collectionData.title, collectionData.desc, [])
      navigate(url,)
    } catch (error) {
      console.log(error);
    }
  }

  function onCancel() {
    navigate(-1);
  }

  return (
    <div className={styles.whole}>
      <h2>Create a Collection</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor='title'>Title of your collection</label>
          <input id='title' name='title' onChange={handleChange} className={styles.inputLocal} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='desc'>Description (max 200 chars)</label>
          <textarea id='desc' name='desc' onChange={handleChange} className={styles.textarea} />
        </div>

        <div>
          <label htmlFor='category'>Add Categories</label>
          <button type='button' onClick={() => {
            if (categories.length < 5) {
              setCategories([...categories, { ...defaultData }])
              console.log(categories)
            } else {
              console.log("no more than 5 categories")
            }

          }}><LucidePlus /></button>

          {categories.map(() => <div>
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          )}

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