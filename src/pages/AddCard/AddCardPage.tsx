import styles from "./AddCard.module.css"
import { LucideX } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
    front: string,
    back: string,
    notes: string,
}

export default function AddCardPage({ onModalClose, onAddCard }: {
    onModalClose: () => void,
    onAddCard: (front: string, back: string, notes: string) => Promise<void>
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

                    <h3>Karte Hinzufügen</h3>
                    <button onClick={onModalClose}>
                        <LucideX />
                    </button>

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.actions}>
                        <div className={styles.inputGroup}>

                            <label>Front</label>
                            <input {...register("front", {
                                required: "This field is required",
                            })} />
                            {errors.front && <span>{errors.front.message}</span>}
                        </div>

                        <div className={styles.inputGroup}>

                            <label>Back</label>
                            <input {...register("back", {
                                required: "This field is required",
                            })} />
                            {errors.back && <span>{errors.back.message}</span>}

                        </div>

                    </div>

                    <div>
                        <label>Notes (optional)</label>
                        <textarea className={styles.textarea} {...register("notes", {
                            required: false
                        })} />
                    </div>
                    <div>
                        <button type="submit">
                            Hinzufügen
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