import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {useEffect} from "react";

import './App.css'

const App = () => {
    return (
        <>
            <Router>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4">
                        <TooltipComponent content={'settings'} position={'Top'}>
                            <button type={'button'} className={'text-3xl p-3 text-white'} style={{background: 'dodgerblue', borderRadius: '50%'}}><FiSettings/></button>
                        </TooltipComponent>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App;