import { observable, action, runInAction } from "mobx";
import api from "../../api";

class Person {
    @observable person = null
    @observable person_details = null
    @observable state = {
        person: 'pending',
        person_details: 'pending'
    }

    @action('PERSON')
    getPerson(person_id) {
        this.person = null
        
        api.getPerson(person_id).then(response => {
            runInAction(() => {
                this.person = response
                this.state.person = 'success'
            })
        }).catch(() => {
            runInAction(() => {
                this.state.person = 'error'
            })
        })
    }

    @action("PERSON_DETAILS")
    getPersonDetails(person_id) {
        this.person_details = null
        api.getPersonDetails(person_id).then(response => {
            runInAction(() => {
                this.person_details = response
                this.state.person_details = 'success'
            })
        }).catch(() => {
            runInAction(() => {
                this.state.person_details = 'error'
            })
        })
    }

}
export default Person