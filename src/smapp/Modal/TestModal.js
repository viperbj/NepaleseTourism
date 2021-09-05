import Modal from "./Modal";
import ModalFooter from "./ModalFooter";
import './Modal.css';

export default function TestModal(props) {
  return (
    <Modal>
            <div>
                <button onClick={ props.close } type="button" className="btn-close" aria-label="Close"></button>
                
                <h1 className="section-title">OUR NEWSLETTER</h1>

                <form action="#" method="post">
                    <input type="button" name="fullname" style={{color: "#fff"}} type ="text" class ="form-control" id="fullname" placeholder="Full Name"/>
                    <input type="button" name="email" style={{color: "#FFF"}} type ="text" class ="form-control" id="email" placeholder="Email Address"/>
                    <input type="button" name="submit" type ="submit" class ="form-control" id="submit" value="Subscribe Now"/>
                </form>
                
                <p><h1 style={{color: "#fff"}}>THANK YOU FOR YOUR VISITING!</h1></p>  
            </div>        
      
      
    </Modal>
  );
}