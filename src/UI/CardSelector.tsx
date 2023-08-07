import React, {useState, useEffect} from 'react';
import PaymentsCardItem from './PaymentsCardItem';
import { borderClassName, cardSize } from '../assets/styleVariables';
import { ISingleDataElem } from '../store/reducers/dataReducer';
import cardIcon from '../assets/imgs/atm-card.png';
import { useAppDispath } from '../hooks/hooks';
import { setCurrentDataAndId } from '../store/reducers/dataReducer';
import { useAppSelector } from '../hooks/hooks';
import { dataSelector } from '../store/reducers/dataReducer';

const CardSelector = ({data, flag, toggleBtn}: any) => {

    const [defaultSelector, setDefaultSelector] = useState(true);
    const [toggleModal, setToggleModal] = useState(false);
    const [editedArr, setEditedArr] = useState([])
    const [currentData, setCurrentData]: any = useState(null);

    const [inputValue, setInputValue] = useState('');

    const dispatch = useAppDispath();

    const {currentData: stateData} = useAppSelector(dataSelector)

    useEffect(() => {
        if (flag === 'to') {
            const array: any = [{id: '0000'}].concat(data);

            setEditedArr(array);
            return;
        }

        setEditedArr(data)
    }, [data, flag]);

    useEffect(() => {
        if (currentData && flag !== 'to') {
            setCurrentData(stateData);
        }
    }, [currentData, flag, stateData])

    const onChangeHandler = (e: any) => {
        const inputType = e.nativeEvent.inputType; //deleteContentBackward | insertText
        const target = e.target.value;

        const validateStr = target.replace(/[^0-9]/g, '')

        if (inputType === 'insertText' && target.length <= 19 && target[0] !== '0') {
            setInputValue(validateStr.replace(/(\d)(?=(\d{4})+($))/g, '$1 '))
        }
        
        if (inputType === 'deleteContentBackward') {
            setInputValue(target);
        }
    };

    const editArrHandler = (elem: any) => {
        let arr: any = [];

        data.forEach((e: any) => {
            if (e.id !== elem.id) {
                arr.push(e)
            }
        })

        if ((flag === 'to') && (elem.id !== '0000')) {
            const array: any = [{id: '0000', cardNumber: '0000'}].concat(arr);

            setEditedArr(array);
            return;
        }

        setEditedArr(arr);
    };

    return (
        <div className='flex flex-col'>
            {defaultSelector && 
                                <div className={`p-4 transition hover:bg-slate-200 ${cardSize} ${borderClassName}`}>
                                    <button onClick={() => {setToggleModal(state => !state)}} className='w-full h-full text-3xl'>
                                        {flag !== 'to' ? 'Выберите карту' : 'Куда отправим?'}
                                    </button>
                                </div>}

            {toggleModal && 
                            <div className={`flex flex-col py-1 px-3 absolute mt-[124px] h-[402px] overflow-auto`}>
                                {editedArr.map((elem: ISingleDataElem ) => (
                                    <button
                                        key={elem.id} 
                                        onClick={() => {
                                                        setToggleModal(state => !state)
                                                        setCurrentData(elem)
                                                        setDefaultSelector(false)
                                                        editArrHandler(elem)
                                                        if (flag !== 'to') {
                                                            toggleBtn(false);
                                                            dispatch(setCurrentDataAndId(elem.id))
                                                        }
                                                        }}
                                        className='mt-2 rounded-xl transition bg-white hover:bg-slate-200'>
                                            {
                                                flag !== 'to'   ? 
                                                                <PaymentsCardItem
                                                                    balance={elem.balance}
                                                                    cardNumber={elem.cardNumber}
                                                                    id={elem.id}/>
                                                                :
                                                                elem.id !== '0000' ? 
                                                                                    <div className={`p-4 flex justify-around items-center ${cardSize} ${borderClassName}`}>
                                                                                        <img 
                                                                                            src={cardIcon} 
                                                                                            alt="card-icon"
                                                                                            className='w-[50px]'/>
                                                                                        <div>
                                                                                            <p className='text-left text-sm'>Номер карты:</p>
                                                                                            <p className='text-lg'>
                                                                                                {
                                                                                                    elem.cardNumber
                                                                                                        .toString()
                                                                                                        .replace(/(\d)(?=(\d\d\d\d)+([^\d]|$))/g, '$1 ')
                                                                                                }
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    :
                                                                                    <div className={`p-4 flex justify-around items-center ${cardSize} ${borderClassName}`}>
                                                                                        <img 
                                                                                            src={cardIcon} 
                                                                                            alt="card-icon"
                                                                                            className='w-[50px]'/>
                                                                                        <p className='text-3xl'>Ввести карту</p>
                                                                                    </div>
                                                                
                                            }
                                    </button>
                                ))}
                            </div>}
            {currentData && 
                            <button onClick={() => {setToggleModal(state => !state)}} className='rounded-xl transition hover:bg-slate-200'>
                                {
                                    flag !== 'to'   ? 
                                                    <PaymentsCardItem
                                                        balance={currentData.balance}
                                                        cardNumber={currentData.cardNumber}
                                                        id={currentData.id}/>
                                                    :
                                                    currentData.id !== '0000'   ? 
                                                                                <div className={`p-4 flex justify-around items-center ${cardSize} ${borderClassName}`}>
                                                                                    <img 
                                                                                        src={cardIcon} 
                                                                                        alt="card-icon"
                                                                                        className='w-[50px]'/>
                                                                                    <div>
                                                                                        <p className='text-left text-sm'>Номер карты:</p>
                                                                                        <p className='text-lg'>
                                                                                            {
                                                                                                currentData.cardNumber
                                                                                                    .toString()
                                                                                                    .replace(/(\d)(?=(\d\d\d\d)+([^\d]|$))/g, '$1 ')
                                                                                            }
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                :
                                                                                <div className={`p-4 flex justify-around items-center ${cardSize} ${borderClassName}`}>
                                                                                    <img 
                                                                                        src={cardIcon} 
                                                                                        alt="card-icon"
                                                                                        className='w-[50px]'/>
                                                                                    <div>
                                                                                        <input 
                                                                                            type="text"
                                                                                            className='p-2 w-[175px] border border-slate-200 rounded-lg shadow-md'
                                                                                            onClick={(e) => e.stopPropagation()}
                                                                                            onChange={onChangeHandler}
                                                                                            value={inputValue}
                                                                                            placeholder='Введите номер карты'/>
                                                                                    </div>
                                                                                </div>
                                                                
                                }
                            </button>}
        </div>
    )

}

export default CardSelector