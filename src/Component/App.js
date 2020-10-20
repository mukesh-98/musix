import React from "react";
import image from "../assets/1.jpg";
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import Form  from "./Form";

function App() {
const data={
    links:'signup',
    name:"Sign Up",
    action:'login'
};
    return (
        <div>
            <div
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    opacity: 0.8,
                    filter: "grayscale(80%)",
                    backgroundPosition: "top center",
                    minHeight: "98vh",
                    height: "auto"
                }}
            >
                <Grid direction="row" justify="flex-end" alignItems="center" container>
                    <Grid
                        style={{
                            margin: "100px 30px"
                        }}
                        item
                        xs={12}
                        sm={12}
                        md={6}
                    >
                        <Paper
                            elevation={3}
                            style={{
                                minHeight: 90,
                                width: "70%",
                                margin: "0px 15%",
                                padding: "20px 10px",
                                position: "relative",
                                top: 50,
                                textAlign: "center"
                            }}
                        >
                            <Typography>We welcome you</Typography>
                            <h1>
                                Musix
                            </h1>
                            <div>
                                <Button
                                    href="#pablo"
                                    target="_blank"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className={"fab fa-twitter"} />
                                </Button>
                                <Button
                                    href="#pablo"
                                    target="_blank"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className={"fab fa-facebook"} />
                                </Button>
                                <Button
                                    href="#pablo"
                                    target="_blank"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className={"fab fa-google-plus-g"} />
                                </Button>
                            </div>
                        </Paper>
                        <Paper
                            elevation={3}
                            style={{
                                minHeight: "50vh",
                                minWidth: "50%"
                            }}
                        >
                            <div  style={{
                                padding: "10px 0px",
                                paddingTop:100
                            }}>
                                <Form value={{data}}/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}


export default App;
