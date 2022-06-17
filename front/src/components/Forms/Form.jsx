export const Form = () =>{
    return(
        <form>
            <div>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder="USER!!!"/>
            </div><div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password"/>
            </div>
        </form>
    );
}