import { Field, Form, Formik } from "formik"
import { SignIn } from "../components/SignIn"
import RegisterForm from "../components/RegisterForm"
import { useAuth } from "../security/AuthContext"

export default function Login() {
  const {isAuthenticated} = useAuth()

  return (
    <div>
      <h1>Login</h1>
      <h2>Enter Your Credentials</h2>
      {/* <button onClick={loginHandler}>Check</button> */}
      {!isAuthenticated ? <SignIn/> : <RegisterForm/> }

      {/* <div> */}
      {/*   <Formik */}
      {/*     initialValues={{ */}
      {/*       email: "", */}
      {/*       password: "", */}
      {/*     }} */}
      {/*     onSubmit={submit} */}
      {/*   > */}
      {/*     <Form> */}
      {/*       <label htmlFor="email">Email</label> */}
      {/*       <Field id="email" name="email" placeholder="Insert your Email" type="email" /> */}
      {/**/}
      {/*       <label htmlFor="password">password</label> */}
      {/*       <Field id="password" name="password" placeholder="Insert your Password" type="password" /> */}
      {/**/}
      {/*       <button type="submit">Submit</button> */}
      {/*     </Form> */}
      {/*   </Formik> */}
      {/* </div> */}
    </div >
  )
}
