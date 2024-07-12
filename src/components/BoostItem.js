import '../App.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function BoostItem(props){
    return (
        <Grid xs={10}>
            <Paper elevation={3}>
                <Grid container>
                <Grid xs={2}>
                    <img src={props.imagePath} style={{height:'100px',marginTop:'5px'}}  alt="Italian Trulli"/>
                </Grid>
                <Grid xs={7}>
                    <a href={props.appLink}>
                        <div style={{alignItems:'left', justifyContent:'left',display:'flex'}}>
                            <Typography variant='h5'>
                                {props.actionParams.type} {props.name}
                            </Typography>
                        </div>
                    </a>
                    <div style={{alignItems:'left', justifyContent:'left',display:'flex'}}>
                    <Typography variant='h6'>
                        {props.creatorAddress.substring(0,4) +'...' + props.creatorAddress.slice(-3)}
                    </Typography>
                    </div>
                </Grid>
                <Grid xs={3}>
                    <Button variant='contained'>
                        <Typography variant='h6'>Claim </Typography>
                        <img style={{height:'20px',marginLeft:'4px',marginRight:'4px'}} src={props.reward.s3Link}/>
                        <Typography variant='h6'>  {props.reward.amount.substring(0,2)}</Typography>
                    </Button>
                    <Typography>{props.numberMinted} of {props.totalParticipants} minted</Typography>
                </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default BoostItem;