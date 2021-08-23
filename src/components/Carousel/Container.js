import React , {Component, Fragment} from 'react';
import {v4 as uuidv4} from 'uuid';
import Navigation from './Navigation';
import Status from './Status-bar';
import './Carousel.css';

import Colosseum from '../../images/Colosseum.jpg';
import Great_wall_of_china from '../../images/Great_wall_of_china.jpg';
import Hanging_garden_of_babylon from '../../images/Hanging_garden_of_babylon.jpg';
import Pyramid_of_giza from '../../images/Pyramid_of_giza.jpg';
import Leaning_tower_of_pisa from '../../images/Leaning_tower_of_pisa.jpg';
import Eiffel_tower from '../../images/Eiffel_tower.jpg';
import Taj_mahal from '../../images/Taj_mahal.jpg';


export default class Carousel extends Component {
    constructor() {
        super();

        // initializing local state
        this.state = {
            slide: 1
        };
    }

    componentWillMount() {
        // setting default list for carousel
        this.items = [
            {
                id: uuidv4(),
                path: Colosseum,
                title: 'Colosseum',
                slideNo: 1
            },
            {
                id: uuidv4(),
                path: Great_wall_of_china,
                title: 'The Great Wall of China',
                slideNo: 2
            },
            {
                id: uuidv4(),
                path: Hanging_garden_of_babylon,
                title: 'The Hanging Garden of Babylon',
                slideNo: 3
            },
            {
                id: uuidv4(),
                path: Pyramid_of_giza,
                title: 'The Pyramid of Giza',
                slideNo: 4
            },
            {
                id: uuidv4(),
                path: Leaning_tower_of_pisa,
                title: 'The Leaning Tower of Pisa',
                slideNo: 5
            },
            {
                id: uuidv4(),
                path: Eiffel_tower,
                title: 'The Eiffel Tower',
                slideNo: 6
            },
            {
                id: uuidv4(),
                path: Taj_mahal,
                title: 'Taj Mahal',
                slideNo: 7
            }
        ];
    }

    /** FUNCTION to display previous slide */
    showPrevSlide = currentSlide => {
        if (currentSlide > 1) {
            this.setState({
                slide: currentSlide - 1
            });
        }
    }

    /** FUNCTION to display next slide */
    showNextSlide = currentSlide => {
        if (currentSlide < this.items.length) {
            this.setState({
                slide: currentSlide + 1
            });
        }
    }

    goToSlide = currentSlide => {
        this.setState({
            slide: currentSlide
        });
    }

    render() {
        return (
            <div>
                <h2>7 Wonders of The World</h2>

                <div className="img-container">
                    {this.items.map((item, key) => (
                        item.slideNo === this.state.slide && 
                        <Fragment key={key}>
                            <span className="slide-title">{item.title}</span>
                            <img src={item.path} alt={item.title} />
                        </Fragment>
                    ))}                    
                    <Navigation slide={this.state.slide} itemLength={this.items.length} showPrevSlide={this.showPrevSlide} showNextSlide={this.showNextSlide} />
                    <Status items={this.items} slide={this.state.slide} goToSlide={this.goToSlide} />
                </div>
            </div>
        )
    }
}