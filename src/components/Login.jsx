import React, { useState } from 'react'

const Login = (props) => {

    const [riotId, setRiotId] = useState('');
    const [riotTag, setRiotTag] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setRiotId(riotId);
        props.setRiotTag(riotTag);
    }


  return (
    <form className="login" onSubmit={handleSubmit}>
        <input type="text" name="riotID" id="id" onChange={e => setRiotId(e.target.value)}/>
        <input type="text" name="riotTAG" id="tag" onChange={e => setRiotTag(e.target.value)}/>
        <input type="submit" value="Search" />
    </form>
  )
}

export default Login