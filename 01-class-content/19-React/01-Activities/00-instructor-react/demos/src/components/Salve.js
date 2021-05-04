import { Card } from './Card';
import { ListItem } from './ListItem';
import "../design/css/salve.css";

function conditionalOutput() {
    /* Some complex logic */

    return (
        <div>JSX</div>
    )
}

const colCSS = {
    fontSize: '42px',
    backgroundColor: 'silver',
    border: '3px solid pink',
    padding: '2rem'
}

export function Salve() {
    const myName = 'Tish';
    const interests = ['My dog', 'Coding', 'Reading', 'Hiking'];
    const animals = ['Dog', 'Cat', 'Cat'];

    return (
        <div className="row" id="salve">
            <div className="col" style={colCSS}>
                <h2>Salve {myName} 🤓!</h2>
                <p style={{margin: "1rem"}}>lorem ipsum dolor sed...</p>
            </div>
            <div className="col">
                <Card title="My interests">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={myName}
                            />
                        </div>
                    </div>
                    <h2>My animals are {animals.join(' ')}</h2>
                    <h3>3 * 2 = {3 * 2} != 2 * 3 = {2 * 3}</h3>
                    <h4>{conditionalOutput()}</h4>
                    <ul>
                        <ListItem item={interests[0]} />
                        <ListItem item={interests[1]} />
                    </ul>
                </Card>
            </div>
        </div>
    );
}
