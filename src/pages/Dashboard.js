// user is in props sent from App.js
const Dashboard = (props) => {

  console.log(props.user);

  return (
    <section className='section'>
      {/* user is in props sent from App.js. Also, this syntax is for checking if an object contains a variable and print it if it exists. See this:- */}
      {/* https://www.freecodecamp.org/news/how-to-check-if-an-object-has-a-key-in-javascript/#:~:text=string%20or%20symbol%20.-,How%20to%20Check%20if%20an%20Object%20Has%20a%20key,with%20the%20hasOwnProperty()%20Method&text=his%20method%20is%20pretty%20similar,the%20object%20and%20false%20otherwise. */}
      {/* <h4>Hello {(props.user && props.user.name) && props.user.name}</h4> */}
      {/* You can also use the line above instead of the line below */}
      <h4>Hello {props.user?.name}</h4>
    </section>
  );
};
export default Dashboard;