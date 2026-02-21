import React, { useState } from 'react'
import { postCardCollection } from '../../api/cardsApi'
import { useNavigate } from 'react-router';
import styles from "./CreateCollection.module.css"
import type { CardModel } from '../../models/card';
import { LucidePlus } from 'lucide-react';
const CreateCollection = () => {

  const navigate = useNavigate();

  const [collectionData, setCollectionData] = useState({
    title: "",
    desc: "",
    cards: [],
  })

  const [cards, setCards] = useState<CardModel[]>([]);

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

async function handleAddCard() {
  const url = await postCardCollection(collectionData.title, collectionData.desc, collectionData.cards);
  navigate(url)
}

  return (
    <div className={styles.whole}>
      <h2>Create a Collection</h2>
      <form onSubmit={onSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor='title'>Title of your collection</label>
          <input id='title' name='title' onChange={handleChange}className={styles.inputLocal}/>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='desc'>Description (max 200 chars)</label>
          <textarea id='desc' name='desc' onChange={handleChange} className={styles.textarea}/>
        </div>

        {/* <button type='button' onClick={handleAddCard}><LucidePlus />Add Card</button> */}

        {/* lieber direkt hier für zugriff auf input daten? */}

        <div>
          <label htmlFor='category'>Add Categories</label>
          <LucidePlus />
          <input id='category' list='categorylist' />
          <datalist id="categorylist">
            <option value="Language" />
            <option value="Biology" />
          </datalist>
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