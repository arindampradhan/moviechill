import React, { Component } from 'react'
import { observer } from 'mobx-react';
import CarouselA from '../../components/CarouselA';

@observer(['person'])
class PersonPage extends Component {
    componentDidMount() {
        const { person, match } = this.props
        if (match && match.params.person_id) {
            person.getPerson(match.params.person_id)
            person.getPersonDetails(match.params.person_id)
        }
    }

    componentWillReceiveProps(nextProps) {
        const { person, match } = this.props
        const { match: match2 } = nextProps
        if (match.params.person_id !== match2.params.person_id) {
            person.getPerson(match.params.person_id)
            person.getPersonDetails(match.params.person_id)
        }
    }

  render() {
    const { person, person_details} = this.props.person;
    return (
        <div className="container-fluid">
            <div className="container">
            {person && person_details ? (
                <React.Fragment>
                        <h1>{person.name}</h1>
                        <h5>Bio</h5>
                        <div >
                            <p className="text-white">{person.biography}</p>
                        </div>

                        <h5>Cast</h5>
                        <div className="row">
                            <div className="container-fluid padding-t-10">
                                <CarouselA dataList={person_details.movie_credits.cast} arrows={false} hoverAllowed={false} />
                            </div>
                        </div>
                        <div className="gap-30"></div>
                        <h5>Crew</h5>
                        <div className="row">
                            <div className="container-fluid padding-t-10">
                                <CarouselA dataList={person_details.movie_credits.crew} arrows={false} hoverAllowed={false} />
                            </div>
                        </div>
                </React.Fragment>
            ):<div>Loading ...</div>}
            </div>
      </div>
    )
  }
}

export default PersonPage;
