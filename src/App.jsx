import { useEffect, useState } from "react"
import Avatar from "./Avatar"
import UserCard from "./UserCard"
import Header from "./Header";

function randomUser() {
  const names = ["John Doe", "Jane Smith", "Alice Ray", "Bob Mark", "Chad Cox"];
  const jobs = ["Writer", "Singer", "Painter", "Chef", "Musician"];

  return {
    id: Math.random(),
    fullName: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * 50 + 18),
    occupation: jobs[Math.floor(Math.random() * jobs.length)],

  }

}

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('users.json')
      .then(data => data.json())
      .then(users => setUsers(users))
  }, [])

  function addUser() {
    const newUser = [...users, randomUser()];
    setUsers(newUser);
  }


  return (
    <div className="container mx-auto">
      <Header addUser={addUser} users={users}></Header>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
          users.map(user => <UserCard key={user.id} user={user}></UserCard>)
        }
      </div>

    </div>
  )
}

export default App
