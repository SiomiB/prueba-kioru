import React, {Component} from 'react';
import axios from 'axios'

class Card extends Component{   

    state = {
        champion: '',
        detail: true
    }
    componentDidMount(){
        axios.get(`http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion/${this.props.id}.json`).then(res=>{
            const champion = Object.values(res.data.data)
            this.setState({champion})
        })
        
    }

    render(){
        const out=this.props.sal
        return(
            <div>
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.props.id}_0.jpg`}></img>
                {
                    this.state.champion.length > 0 && 
                    <div>
                        {this.state.champion[0].name}
                        {this.state.champion[0].lore}
                        {console.log(this.state.champion[0])}
                    </div>
                }
                
                <button onClick={out} >Regresar</button>
            </div>
        );
    }

    
}

export default Card