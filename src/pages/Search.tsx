import SearchBar from '../components/SearchBar/SearchBar'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

const Search: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Search</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SearchBar />
            </IonContent>
        </IonPage>
    )
}

export default Search
