import { LucidePlus } from 'lucide-react'
import React, { useState } from 'react'
import { postCardCollection } from '../../api/cardsApi'
import { useNavigate } from 'react-router';
import styles from "./CreateCollection.module.css"

const CreateCollection = () => {

  const navigate = useNavigate();


  

  const [collectionData, setCollectionData] = useState({
    title: "",
    desc: ""
  })

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
        <div>
          <label htmlFor='title'>Title of your collection</label>
          <input id='title' name='title' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='desc'>Description (max 200 chars)</label>
          <textarea id='desc' name='desc' onChange={handleChange} />
        </div>

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