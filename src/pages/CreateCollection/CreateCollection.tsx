import { LucidePlus } from 'lucide-react'
import React, { useState } from 'react'
import { postCardCollection } from '../../api/cardsApi'
import { useNavigate } from 'react-router';

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

  return (
    <div>
      <h2>Create a Collection</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title of your collection</label>
        <input id='title' name='title' onChange={handleChange} />
        <label htmlFor='desc'>Description</label>
        <textarea id='desc' name='desc' onChange={handleChange} />
        <label htmlFor='category'>Add Categories</label>
        <LucidePlus />
        <input id='category' />

        <button type='submit'>
          Erstellen
        </button>
      </form>
    </div>
  )
}

export default CreateCollection 