import { useState } from "react";

function App() {
  let initialState = [];
  const [state, setState] = useState(initialState);
  const [textValue, setTextValue] = useState('');
  const [count, setCount] = useState(0);
  const [filterout, setFilterOut] = useState([]);

  const linkList = [
    {
      option: 'completed',
    },
    {
      option:'active',
    },
    {
      option:'all',
    }
  ];


  const changeHandler = e => {
    setTextValue(e.target.value);
  }

  const keyHandler = e => {
    if (e.key === 'Enter' && e.target.value){
      setCount(c => c + 1);
      setState(oldArray => [...oldArray, 
        {
          value : e.target.value,
          id: count,
          completed : false,
        }
      ]);
      setTextValue('');
    }
  }

  

  const CheckBox = (props) => {
    
    const {data} = props;

    const checkBoxHandler = check => {
      let newArray = [...state];
      newArray[data.id].completed = !newArray[data.id].completed;
      setState(newArray);

    }

    return(
      <>
         <li>
                <input 
                type="checkbox"
                checked={data.completed}
                onChange={checkBoxHandler}
              />

              <label>{data.value}</label>
          </li>
      </>
    );
  }

  const completed = () =>
  {
    let out = [];
    state.map(
      element => {
        if (element.completed === true){
          out.push(element);
        }
      }
    )

    return out;

  }
  const active = () =>
  {
    let out = [];
    state.map(
      element => {
        if (element.completed === false){
          out.push(element);
        }
      }
    )

    return out;

  }
  const All = () =>
  {
    return state;

  }

  const LinkClickHandler = (option) => {
    switch(option){
      case 'completed':
        const filterC = completed();
        setFilterOut(filterC);
        break;
      case 'active':
        const filterA = active();
        setFilterOut(filterA);
        break;
      case 'all':
        const filterAll = All();
        setFilterOut(filterAll);
        break;
      default:
        console.log('none');
    }
  }
 
  const Link = () => {
    return (
      <div id="link-div">
        {linkList.map(
          element => (
            <span>
              <a onClick={()=>LinkClickHandler(element.option)}>{element.option}</a>
            </span>
        )
        )}
      </div>
    );
  }

  
  return(
    <div id="body-div">
      <h1>Hi, I am Ali</h1>
      <input
        autoFocus 
        type="text"
        onChange={changeHandler}
        onKeyDown={keyHandler}
        value={textValue}
        placeholder="Add new"
      />
      <ul>
        {
          state.map(
            item => (
             <CheckBox data={item}/>
            )
          )
        }
      </ul>

      <Link/>
      <ul>
        {filterout.map(
          element => (
            <li>
              {element.value}
            </li>
          )
        )}
      </ul>
      <p>Wish you best luck</p>
    </div>
  );
}

export default App;
