const LoginForm = () => {
  return (
    <form action="">
      <h1>Log In</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type={"email"} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
