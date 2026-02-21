import styles from "./AddCard.module.css"

const AddCardPage = () => {
    return (
        <div>

            <div className={styles.addCard}>
                <div className={styles.header}>

                    <h4>Karte 1</h4>
                </div>


                <div className={styles.actions}>
                    <div className={styles.inputGroup}>

                        <label>Front</label>
                        <input />
                    </div>

                    <div className={styles.inputGroup}>

                        <label>Back</label>
                        <input />
                    </div>

                </div>

                <div>
                    <label>Notes (optional)</label>
                    <textarea className={styles.textarea} />
                </div>
            </div>
        </div>
    )
}

export default AddCardPage