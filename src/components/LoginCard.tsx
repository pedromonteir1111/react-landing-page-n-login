import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import logowbg from "../assets/images/Logo Maria Melo-1.png"

export default function LoginCard() {

    const [isLoginForm, setIsLoginForm] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    const { login } = useAuth()

    const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

    function handleRegister() {
        const users = getUsers()

        if (!name.trim() || !email.trim() || !password.trim()) {
            setMessage("Todos os campos devem ser preenchidos.");
            setSuccess(false);
            return;
        }

        if (users.some((user: any) => user.email === email)) {
            setMessage("Este email já está cadastrado.")
            setSuccess(false)
            return;
        }

        users.push({ name, email, password })
        localStorage.setItem("users", JSON.stringify(users))
        setMessage("Conta criada com sucesso! Faça login.")
        setSuccess(true)
        setIsLoginForm(true);
    };

    // Função para realizar login
    function handleLogin() {
        const users = getUsers()

        const user = users.find((user: any) => user.email === email && user.password === password)

        if (user) {
            setMessage("");
            setSuccess(true);
            login(user.name, user.email); // Agora passando também o nome
            navigate("/");
        } else {
            setMessage("Email ou senha incorretos.");
            setSuccess(false);
        }
    };

    return (
        <div className="w-screen px-15 pb-15 pt-7 sm:border-2 sm:border-gray-200 bg-white sm:rounded-md sm:shadow-lg sm:w-120">
            <div className="flex flex-col justify-center items-center">
                <img src={logowbg} className="w-30 rounded-xl m-10 shadow-sm" />

                <div className="w-[100%]">
                    <h1 className="text-4xl font-semibold">{isLoginForm ? "Fazer Login:" : "Registrar-se:"}</h1>

                    <div className="pt-5">

                        {!isLoginForm && <div className="py-2">
                            <p className="text-lg font-medium">Nome</p>
                            <input
                                className="p-3 bg-white border-2 border-gray-100 w-[100%] rounded-lg "
                                placeholder="Insira seu Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>}

                        <div className="py-2">
                            <p className="text-lg font-medium">Email</p>
                            <input
                                className="p-3 bg-white border-2 border-gray-100 w-[100%] rounded-lg"
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="py-2">
                            <p className="text-lg font-medium">Senha</p>
                            <input
                                className="p-3 bg-white border-2 border-gray-100 w-[100%] rounded-lg"
                                type="password"
                                placeholder="Insira sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        onClick={isLoginForm ? handleLogin : handleRegister}
                        className="cursor-pointer py-3 w-[100%] bg-amber-300 rounded-lg shadow-sm mt-5 mb-2 text-xl font-semibold"
                    >
                        {isLoginForm ? "Entrar" : "Registrar"}
                    </button>

                    {message && <p className={`text-sm ${success ? "text-gray-500" : "text-red-400"}`}>{message}</p>}

                    <span className="mt-10 text-sm text-gray-500">
                        {isLoginForm ? "Ainda não tem uma conta?" : "Já tem uma conta?"}{" "}
                        <button className="underline" onClick={() => {
                            setIsLoginForm(!isLoginForm)
                            setMessage("")
                            setSuccess(true)
                            }}>
                            {isLoginForm ? "Registre-se" : "Fazer login"}
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}