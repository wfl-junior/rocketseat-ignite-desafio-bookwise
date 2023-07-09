interface LoginProps {}

async function Login({}: LoginProps): Promise<JSX.Element | null> {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-bold">BookWise</h1>
    </div>
  );
}

export default Login;
