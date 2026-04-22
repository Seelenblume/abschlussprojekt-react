import styles from "./CardModal.module.css"
import { LucideX } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
    front: string,
    back: string,
    notes: string,
}

export default function CardModal({ onModalClose, onAddCard, update }: {
    onModalClose: () => void,
    onAddCard: (front: string, back: string, notes: string) => Promise<void>,
    update?: boolean
}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onAddCard(data.front, data.back, data.notes)
        onModalClose();
    }


    return (
        <>
            <div className={styles.backdrop}>

            </div>
            <div className={styles.addCard}>
                <div className={styles.header}>

                    <h3>Karte {update ? <span>Aktualisieren</span> : <span>Hinzufügen</span>}</h3>
                    <button onClick={onModalClose}>
                        <LucideX />
                    </button>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.actions}>
                        <div className={styles.inputGroup}>

                            <label>Vorderseite</label>
                            <input placeholder="Inhalt eingeben..." {...register("front", {
                                required: !update ? "Pflichtfeld" : false,
                            })} />
                            {errors.front && <span className={styles.errorMessage}>{errors.front.message}</span>}
                        </div>

                        <div className={styles.inputGroup}>

                            <label>Rückseite</label>
                           <input placeholder="Inhalt eingeben..." {...register("back", {
                                required: !update ? "Pflichtfeld" : false,
                            })} />
                            {errors.back && <span className={styles.errorMessage}>{errors.back.message}</span>}

                        </div>

                    </div>

                    <div>
                        <label>Notizen</label>
                        <textarea className={styles.textarea} placeholder="Notizen eingeben..." {...register("notes", {
                            required: !update ? "Pflichtfeld" : false,
                        })} />
                        {errors.notes && <span className={styles.errorMessage}>{errors.notes.message}</span>}
                    </div>
                    <div>
                        <button type="submit">
                            {update ? <span>Aktualisieren</span> : <span>Hinzufügen</span>}
                        </button>
                        <button onClick={onModalClose}>
                            Abbrechen
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}