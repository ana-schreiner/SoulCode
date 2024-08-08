import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function cadastrar(data) {
    console.log("Cadastro!");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className="form-control"
            {...register("nome", {required: true, maxLength: 150})}
            />
            {errors.nome && <small className="invalid">O nome é inválido!</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            {...register("email", { required: "O email é obrgatório." })}
            />
            {errors.email && <small className="invalid">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            id="senha" 
            className="form-control" 
            {...register("senha", {required: true, minLength: {value: 6, message: "Mínimo de 6 caracteres."}})}
            />
            {errors.senha && <small className="invalid">A senha é inválida!</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Cadastrar
        </Button>
        <Button variant="danger" className="mt-1 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Cadastro;