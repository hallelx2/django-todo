import { useState, useEffect } from "react";
import api from "../api"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const getNote = () => {
      api
        .get('/api/get/notes')
        .then((res) => res.data)
        .then((data) => {setNotes(data); console.log(data)})
        .catch((err) => alert(err))
    }

    return <div>Home</div>
}

export default Home;
