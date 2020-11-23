// import { useFormik } from "formik";
//import { useForm } from "react-hook-form";
//import * as Yup from "yup";

// Formik

// export default function LoginPage() {
//   const initVals = {
//     initialValues: {
//       login: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       login: Yup.string().max(10, "Login must be shoter then 10 charcters").required("Required"),
//       password: Yup.string().min(6, "Password must be longer then 6 charcters").required("Required"),
//     }),
//     onSubmit: ({ login, password }) => {
//       alert(`login: ${login}, password: ${password}`);
//     },
//   };
//   const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik(initVals);

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="login">Login</label>
//       <input id="login" name="login" type="text" value={values.login} onChange={handleChange} />
//       {touched.login && errors.login ? <div>{errors.login}</div> : null}
//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         name="password"
//         type="password"
//         value={values.password}
//         onBlur={handleBlur}
//         onChange={handleChange}
//       />
//       {touched.password && errors.password ? <div>{errors.password}</div> : null}
//       <button type="submit">Log in</button>
//     </form>
//   );
// }

// useForm

// export default function LoginPage() {
//   const { register, handleSubmit, errors } = useForm({
//     mode: "onBlur",
//     validationSchema: Yup.object({
//       login: Yup.string().max(10, "Login must be shorter than 10 characters").required("Required"),
//       password: Yup.string().min(6, "Password should be longer than 6 characters").required(),
//     }),
//   });

//   const onSubmit = ({ login, password }) => {
//     alert(`Login: ${login}, password: ${password}`);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="login">Login</label>
//       <input ref={register} id="login" name="login" type="text" />
//       {errors.login && <div>{errors.login.message}</div>}
//       <label htmlFor="password">Password</label>
//       <input ref={register} id="password" name="password" type="password" />
//       {errors.password && <div>{errors.password.message}</div>}
//       <button type="submit">Log in</button>
//     </form>
//   );
// }
