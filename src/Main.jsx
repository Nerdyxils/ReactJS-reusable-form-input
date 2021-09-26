import React, { Component } from 'react'
import Input from './components/Input'
import { GiPadlock } from 'react-icons/gi'

import './main.css'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            text : 'Text'
        }

        this.onInputchange = this.onInputchange.bind(this)
    }

    onInputchange(event) {
        this.setState({
            text : event.target.value
        });
    }

    render() {
        return (
            <div className="container">
            <h1>Inputs</h1>

            <div className="i_row">
                <div className="i_item">
                    <small>{`<input />`}</small>
                    <p>Label</p>
                    <Input/>
                </div>
                <div className="i_item">
                    <small>&:hover</small>
                    <p>Label</p>
                    <Input styleClass="f_hover"/>
                </div>
                <div className="i_item">
                    <small>&:focus</small>
                    <p>Label</p>
                    <Input styleClass="f_focus"/>
                </div>
            </div>
            <div className="i_row">
                <div className="i_item">
                    <small>{`<input error />`}</small>
                    <p>Label</p>
                    <Input styleClass="error"/>
                </div>
                <div className="i_item">
                    <small>&:hover</small>
                    <p>Label</p>
                    <Input styleClass="e_hover"/>
                </div>
                <div className="i_item">
                    <small>&:focus</small>
                    <p>Label</p>
                    <Input styleClass="e_focus"/>
                </div>
            </div>
            <div className="i_item">
                <small>{`<input disabled />`}</small>
                <p className="d_label">Label</p>
                <Input styleClass="disabled"/>
            </div>
            <div className="i_row">
                <div className="i_item">
                    <small>{`<Input helperText=”Some interesting text” />`}</small>
                    <p>Label</p>
                    <Input styleClass="f_input"/>
                    <small className="sm_text">Some interesting text</small>
                </div>
                <div className="i_item">
                    <small>{`<Input helperText=”Some interesting text” />`}</small>
                    <p className="s_red">Label</p>
                    <Input styleClass="error"/>
                    <small className="sm_text s_red">Some interesting text</small>
                </div>
            </div>
            <div className="i_row">
                <div className="i_item">
                    <small>{`<Input startIcon />`}</small>
                    <p>Label</p>
                    <Input styleClass="f_input"> <GiPadlock /> </Input>
                </div>
                <div className="i_item">
                    <small>{`<Input endIcon />`}</small>
                    <p className="s_red">Label</p>
                    <Input styleClass="f_input" />
                </div>
            </div>
            <div className="i_item">
                <small>{`<Input value=”text” />`}</small>
                <p>Label</p>
                <Input styleClass="f_input" 
                    value={this.state.text}
                    onChange={this.onInputchange}/>
            </div>
            <div className="i_row">
                <div className="i_item">
                    <small>{`<Input value=”sm” />`}</small>
                    <p>Label</p>
                    <Input styleClass="f_input"/>
                </div>
                <div className="i_item">
                    <small>{`<Input value=”md” />`}</small>
                    <p>Label</p>
                    <Input styleClass="md_input"/>
                </div>
            </div>
            <div className="i_item">
                <small>{`<Input fullWidth />`}</small>
                <p>Label</p>
                <Input styleClass="full-width" />
            </div>
            <div className="i_item">
                <small>{`<Input multiline row=”4” />`}</small>
                <p>Label</p>
                <Input styleClass="row_4" />
            </div>
            <div className="cc">
                <small className="cc">created by Nerdyxils - devChallenges.io</small>
            </div>
            </div>
        )
    }
}
       
// function Main() {
//     return (
//                 <div className="container">
//                 <h1>Inputs</h1>
    
//                 <div className="i_row">
//                     <div className="i_item">
//                         <small>{`<input />`}</small>
//                         <p>Label</p>
//                         <Input/>
//                     </div>
//                     <div className="i_item">
//                         <small>&:hover</small>
//                         <p>Label</p>
//                         <Input styleClass="f_hover"/>
//                     </div>
//                     <div className="i_item">
//                         <small>&:focus</small>
//                         <p>Label</p>
//                         <Input styleClass="f_focus"/>
//                     </div>
//                 </div>
//                 <div className="i_row">
//                     <div className="i_item">
//                         <small>{`<input error />`}</small>
//                         <p>Label</p>
//                         <Input styleClass="error"/>
//                     </div>
//                     <div className="i_item">
//                         <small>&:hover</small>
//                         <p>Label</p>
//                         <Input styleClass="e_hover"/>
//                     </div>
//                     <div className="i_item">
//                         <small>&:focus</small>
//                         <p>Label</p>
//                         <Input styleClass="e_focus"/>
//                     </div>
//                 </div>
//                 <div className="i_item">
//                     <small>{`<input disabled />`}</small>
//                     <p className="d_label">Label</p>
//                     <Input styleClass="disabled"/>
//                 </div>
//                 <div className="i_row">
//                     <div className="i_item">
//                         <small>{`<Input helperText=”Some interesting text” />`}</small>
//                         <p>Label</p>
//                         <Input styleClass="f_input"/>
//                         <small className="sm_text">Some interesting text</small>
//                     </div>
//                     <div className="i_item">
//                         <small>{`<Input helperText=”Some interesting text” />`}</small>
//                         <p className="s_red">Label</p>
//                         <Input styleClass="error"/>
//                         <small className="sm_text s_red">Some interesting text</small>
//                     </div>
//                 </div>
//                 <div className="i_row">
//                     <div className="i_item">
//                         <small>{`<Input startIcon />`}</small>
//                         <p>Label</p>
//                         <Input styleClass="f_input" />
//                     </div>
//                     <div className="i_item">
//                         <small>{`<Input endIcon />`}</small>
//                         <p className="s_red">Label</p>
//                         <Input styleClass="f_input" />
//                     </div>
//                 </div>
//                 <div className="i_item">
//                     <small>{`<Input value=”text” />`}</small>
//                     <p>Label</p>
//                     <Input styleClass="f_input" value={Text}/>
//                 </div>
//                 <div className="i_row">
//                     <div className="i_item">
//                         <small>{`<Input value=”sm” />`}</small>
//                         <p>Label</p>
//                         <Input styleClass="f_input"/>
//                     </div>
//                     <div className="i_item">
//                         <small>{`<Input value=”md” />`}</small>
//                         <p>Label</p>
//                         <Input styleClass="md_input"/>
//                     </div>
//                 </div>
//                 <div className="i_item">
//                     <small>{`<Input fullWidth />`}</small>
//                     <p>Label</p>
//                     <Input styleClass="full-width" />
//                 </div>
//                 <div className="i_item">
//                     <small>{`<Input multiline row=”4” />`}</small>
//                     <p>Label</p>
//                     <Input styleClass="row_4" />
//                 </div>
//             <div className="cc">
//                <small className="cc">created by Nerdyxils - devChallenges.io</small>
//             </div>
    
//             </div>
//         )
//     }
export default Main
