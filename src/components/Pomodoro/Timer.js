import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {

    constructor() {
        super();

        // Initialize local state
        this.state = {
            alert: {
                type: '',
                message: ''
            },
            time: 0
        };

        // define times for work, shoet break and long break
        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900
        };
    }

    componentDidMount() {
        // set default time when the component mounts
        this.setDefaultTime();
    }

    setDefaultTime = () => {
        // default timer is set to 25 mins
        this.setState({
            time: this.times.defaultTime
        });
    }


    /* FUNCTION to set timer for work */
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'Working!'
            }
        });

        return this.setTime(this.times.defaultTime);
    }

    /* FUNCTION to set timer for short break */
    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking kitkat break!'
            }
        });

        return this.setTime(this.times.shortBreak);
    }

    /* FUNCTION to set timer for long break */
    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking power nap!'
            }
        });

        return this.setTime(this.times.longBreak);
    }


    /* FUNCTION to set time span for currently activated timer */
    setTime = newTime => {
        this.restartInterval();

        this.setState({
            time: newTime
        });
    }


    restartInterval = () => {

        // clearing the interval
        clearInterval(this.interval);

        // Execute countDown function every second
        this.interval = setInterval(this.countDown, 1000);
    }


    countDown = () => {
        // If the time reach 0 then we display Buzzzz! alert
        if (this.state.time === 0) {
            this.setState({
                alert: {
                type: 'buz',
                message: 'Buzzzzzzzz!'
                }
            });
        } else {
            // We decrease the time second by second
            this.setState({
                time: this.state.time - 1
            });
        }
    }

    displayTimer = seconds => {
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);

        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }


    render() {

        const {alert: {type, message}, time} = this.state; 

        return (
            <div className="Pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>
                <div className="timer">
                    {this.displayTimer(time)}
                </div>
                <div className="types">
                    <button className="start" onClick={this.setTimeForWork}>
                        Start Working
                    </button>
                    <button className="short" onClick={this.setTimeForShortBreak}>
                        Short Break
                    </button>
                    <button className="long" onClick={this.setTimeForLongBreak}>
                        Long Break
                    </button>
                </div>
            </div>
        );
    }

}

export default Timer;