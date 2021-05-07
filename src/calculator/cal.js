import { ButtonGroup, Card, CardContent, Button, TextField, Typography, Container, Grid } from '@material-ui/core';
import React from 'react';
import back from '../images/img2.jpg';
import top from '../images/img2.jpg';
import cover from '../images/bg1.jpg';
import "../App.css";

export default class Cal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }

    onClick = (button) => {
        console.log(button);

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        console.log("result");
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Container style={{ textAlign: "center", marginTop: 50 }}>
                            <Card style={{ height: 650, width: 700, background: "url(" + cover + ")", backgroundSize: "cover", textAlign: "center" }}>
                                <Card style={{ height: 100, width: 600, marginLeft: 50, marginTop: 20, background: "black", color: "white" }}><h1>{this.state.result}</h1></Card>
                                <Card style={{ height: 500, width: 600, marginLeft: 50, background: "url(" + top + ")", backgroundSize: "cover" }}><br />
                                    <Button class="button" name="(" onClick={e => this.onClick(e.target.name)}>(</Button>
                                    <Button class="button" name="CE" onClick={e => this.onClick(e.target.name)}>CE</Button>
                                    <Button class="button" name=")" onClick={e => this.onClick(e.target.name)}>)</Button>
                                    <Button class="button" name="C" onClick={e => this.onClick(e.target.name)}>C</Button><br />


                                    <Button class="button" name="1" onClick={e => this.onClick(e.target.name)}>1</Button>
                                    <Button class="button" name="2" onClick={e => this.onClick(e.target.name)}>2</Button>
                                    <Button class="button" name="3" onClick={e => this.onClick(e.target.name)}>3</Button>
                                    <Button class="button1" name="+" onClick={e => this.onClick(e.target.name)}>+</Button><br />


                                    <Button class="button" name="4" onClick={e => this.onClick(e.target.name)}>4</Button>
                                    <Button class="button" name="5" onClick={e => this.onClick(e.target.name)}>5</Button>
                                    <Button class="button" name="6" onClick={e => this.onClick(e.target.name)}>6</Button>
                                    <Button class="button2" name="-" onClick={e => this.onClick(e.target.name)}>-</Button><br />

                                    <Button class="button" name="7" onClick={e => this.onClick(e.target.name)}>7</Button>
                                    <Button class="button" name="8" onClick={e => this.onClick(e.target.name)}>8</Button>
                                    <Button class="button" name="9" onClick={e => this.onClick(e.target.name)}>9</Button>
                                    <Button class="button3" name="*" onClick={e => this.onClick(e.target.name)}>x</Button><br />


                                    <Button class="button" name="." onClick={e => this.onClick(e.target.name)}>.</Button>
                                    <Button class="button" name="0" onClick={e => this.onClick(e.target.name)}>0</Button>
                                    <Button class="button" name="=" onClick={e => this.onClick(e.target.name)}>=</Button>
                                    <Button class="button4" name="/" onClick={e => this.onClick(e.target.name)}>÷</Button><br />
                                </Card>
                            </Card>
                        </Container>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h2" style={{ textAlign: "center", fontFamily: "serif", marginTop: 50 }}><b><i>Calculator</i></b></Typography>
                        <Typography variant="h4" style={{ textAlign: "center", fontFamily: "serif" }}><i>A calculator is a machine which allows
                        people to do math operations more easily. For example, most calculators will add, subtract, multiply, and divide.
                        Some also do square roots, and more complex calculators can help with calculus and draw function graphs.
                        Calculators are found everywhere.
                        <br /><br />
                        Calculators are simply a tool students use to help solve problems. Since they eliminate tedious computations
                        and algebraic manipulations that discourage many students, calculators allow more students to solve problems
                        and appreciate the power and value of mathematics in the world today.</i></Typography>
                    </Grid>
                </Grid>

            </div>
        )
    }
}