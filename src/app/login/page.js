import s from './Login.module.scss'

export const metadata = {
    title: "Вход - Popug"
};
export default function Login() {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h1 className={s.text}>
                    Вход
                </h1>
                <div className={s.inputs}>
                    <input type={"email"}
                           />
                    <input type={"password"}

                    />
                </div>
                <button className={s.btn}>Войти</button>
            </div>
        </div>
    );
}