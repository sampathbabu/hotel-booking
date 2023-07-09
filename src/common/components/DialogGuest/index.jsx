import { Button, Dialog, DialogActions, DialogContent } from "@mui/material"

const DialogGuest=({onLoginAction, onGuestAction})=>{
    return <Dialog open={true}>
        <DialogContent>Continue as Guest or login (Remember lorem text....)</DialogContent>
        <DialogActions>
            <Button onClick={()=>{
                onGuestAction()
            }}>Continue as guest</Button>
            <Button onClick={()=>{
                onLoginAction()
            }}>Login</Button>
        </DialogActions>
    </Dialog>
}

export default DialogGuest