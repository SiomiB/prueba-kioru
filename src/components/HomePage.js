import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

class HomePage extends Component{
    state = {
        champions: [],
        detail: false,
        champion: ''
    }

    componentDidMount(){
        axios.get('http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json').then(res=>{
           //  const champions = res.data;
            const champions = Object.keys(res.data.data)
            this.setState({champions})
        })
    }

    render(){
        const changeState=(champion)=>{
            this.setState({detail: true, champion})
            console.log(champion)           
        }
        return(
            <div>
                {this.state.detail ?
                    
                    <div id="detail">
                        <h1>Detalle Campeón</h1>
                        <Card id= {this.state.champion} sal={()=>this.setState({detail:false})}/>

                    </div>                     
                    :
                    (                        
                        <div id="all">
                            <h1>Campeones</h1>
                            {this.state.champions.map(champion => <button onClick={() => changeState(champion)}><img src={`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/${champion}.png`}></img></button>)}     
                        </div>
                    )
                }
            </div>
        );
    }
}

export default HomePage;