import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function User() {

  const [meals, set] = useState([])
  const [exercises, setex] = useState([])

  const [username, name] = useState('');




  const [d, dc] = useState('');


  console.log(username, meals)
  useEffect(() => {




    fetch('/getmeals', {

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
        'mealdate': d
      },


    }).then(data => data.json()).then(data => {
      set(data.meals);
      name(data.user.first)
    }).then(console.log('ff'))

    fetch('/getex', {

      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token'),
        'mealdate': d

      },


    }).then(data => data.json()).then(data => { setex(data.exercises); console.log(data) })


  }, [d])

  return (<div style={{ display: 'flex' }}>

    <div style={{ width: '100%' }}>

      <div onChange={(e) => { dc(e.target.value) }} style={{ textAlign: 'center', fontSize: '1.25rem', padding: '2rem 0' }}>
        <div style={{ display: !localStorage.getItem('auth-token') ? 'none' : 'block' }}><h1 style={{ padding: '1rem 0', color: 'white', textTransform: 'capitalize' }}>Good {((new Date().getHours()) >= 18 && 'Evening') || (new Date().getHours() >= 5 && 'Morning') || (new Date().getHours() >= 12 && 'Afternoon')}, {username}</h1></div>
        <input type="date" /></div>
      <div style={{ width: '100%', height: '100vh', margin: '0 auto', textAlign: 'center', color: 'white' }}>
        {localStorage.getItem('auth-token') && (meals.length ? <div style={{ textAlign: 'center' }}> <button id='btn-1'

          style={{ textDecoration: 'none', border: 'solid 1px grey', background: 'none', color: 'white', fontWeight: 'bolder', fontSize: '1.5rem', padding: '2% 4%' }} onClick={() => {

            console.log(document.getElementById('btn-1').style.background)
            if (document.getElementById('btn-1').style.background === 'none') {
              document.getElementById('btn-1').style.background = 'white';
              document.getElementById('btn-1').style.color = 'black';
            }

            else if (document.getElementById('btn-1').style.background === 'white') {
              document.getElementById('btn-1').style.background = 'none';
              document.getElementById('btn-1').style.color = 'white';
            }

            if (document.getElementById('meal').style.display === 'block')
              document.getElementById('meal').style.display = 'none'
            else
              document.getElementById('meal').style.display = 'block'
          }} >Your Meals</button><button id='btn-2' style={{ textDecoration: 'none', border: 'solid 1px grey', background: 'none', color: 'white', fontWeight: 'bolder', fontSize: '1.5rem', padding: '2% 4%', marginLeft: '1rem' }} onClick={() => {

            if (document.getElementById('btn-2').style.background === 'none') {
              document.getElementById('btn-2').style.background = 'white';
              document.getElementById('btn-2').style.color = 'black';
            }

            else if (document.getElementById('btn-2').style.background === 'white') {
              document.getElementById('btn-2').style.background = 'none';
              document.getElementById('btn-2').style.color = 'white';
            }

            if (document.getElementById('ex').style.display === 'block')
              document.getElementById('ex').style.display = 'none'
            else
              document.getElementById('ex').style.display = 'block'
          }} >Your Exercise</button><div id="meal" style={{ display: 'none', marginTop: '3rem' }}><table className="table" style={{ background: 'white', borderRadius: '1rem' }}>
            <thead>
              <tr>
                <th scope="col" style={{ width: '10%' }}>#</th>
                <th scope="col" style={{ width: '70%' }}>Time</th>
                <th scope="col" style={{ width: '20%' }}>Meal</th>


              </tr>
            </thead>
            <tbody>
              {meals.length ? meals[0].allmeals.map((elem, index) => <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td >{elem.title}</td>
                <td >{elem.content}</td>

              </tr>) : 'no meals'}


            </tbody>
          </table></div>

          <div id="ex" style={{ display: 'none', marginTop: '3rem' }}>{exercises.length !== 0 ? <table className="table" style={{ background: 'white', borderRadius: '1rem' }}>
            <thead>
              <tr>
                <th scope="col" style={{ width: '10%' }}>#</th>
                <th scope="col" style={{ width: '70%', textAlign: 'center' }}>Exercise</th>
                <th scope="col" style={{ width: '20%' }}>Sets</th>


              </tr>
            </thead>
            <tbody>
              {exercises.length ? exercises[0].allexercises.map((elem, index) => <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td >{elem.exname}</td>
                <td >{elem.set} sets</td>
              </tr>) : ''}


            </tbody>
          </table> : `You Don't have an exercise plan for the date you've selected`}</div>
        </div>
          : 'No data to show')}
        {!localStorage.getItem('auth-token') &&

          <div >You need to login first <Link className="btn btn-primary" to={'/login'}>Login</Link></div>}

      </div></div>
  </div>
  )

}