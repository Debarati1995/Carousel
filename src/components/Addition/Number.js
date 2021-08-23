import React , {Component} from 'react';
import Result from './Result';

 class Number extends Component {
     constructor() {
         super();
         
         this.state = {
             numbers: '', // to save the input values
             results: [] // to save the results of the sums
         };
        }
     

     handleNumberChange = e => {
        const {target: {value}} = e;

        // Converting the string value to array
        const numbers = Array.from(value);

        // adding all the numbers from the array
        const result = numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);

        //  updating local state
        this.setState({
            numbers: value,
            results: [...this.state.results, result]
        });
     }

     render() {
        return (
            <div className="Numbers">
                <input type="number" value={this.state.numbers} onChange={this.handleNumberChange}/>
                    {/* Rendering the results array */}
                    <ul>
                        {this.state.results.map((result, i) => (
                            <li key={i}> {result} </li>
                        ))}
                    </ul>
            </div>
        )
     }
 }

 export default Number;