export default function Login() {

    const OnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.Admin.value);
        console.log(e.target.elements.Password.value);
    };
    return (
        <form onSubmit={OnSubmit}>
            <h1>Welcome boss!</h1>
            <label htmlFor="Admin">boss-mail</label>
            <input type="email" name="Admin" placeholder="boss mail"></input>
            <br />
            <label htmlFor="Password"> password </label>
            <input type="text" name="Password" placeholder="password"></input>
            <br/>
            <input type="submit" value="Sign-In"></input>
        </form>
    );
}