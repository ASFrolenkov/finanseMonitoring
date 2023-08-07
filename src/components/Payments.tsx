import React, {useState} from 'react'
import { borderClassName } from '../assets/styleVariables'
import { dataSelector } from '../store/reducers/dataReducer'
import { useAppSelector } from '../hooks/hooks'
import CardSelector from '../UI/CardSelector'
import savedCard from '../data/savedCard'
import { useAppDispath } from '../hooks/hooks'
import { changeBalanceOnCart } from '../store/reducers/dataReducer'

const Payments = () => {

	const [inputValue, setInputValue] = useState('');
	const [visibleInputValue, setVisibleInputValue] = useState('');
	const [disabledBtn, setDisabledBtn] = useState(true);

	const dispatch = useAppDispath();

	const {allData, currentData} = useAppSelector(dataSelector);

	const onChangeHandler = (e: any) => {
		const target = e.target.value;

		if ((target.length <= 9) && (target[0] !== '0')) {	
			setVisibleInputValue(target
							.replace(/[^0-9]/g, '')
							.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.'));
			setInputValue(target.replace(/[^0-9]/g, ''));
		}	
	}

	const onClickHandler = () => {
		console.log('here')
		if (currentData && inputValue) {
			console.log(currentData, inputValue)
			dispatch(changeBalanceOnCart({
				id: currentData.id,
				spending: currentData.balance - Number(inputValue)
			}))
		}
	}



	if (allData) {
		return (
			<div className={'p-5 ' + borderClassName}>
				<div className='flex justify-center items-center'>
					<CardSelector 
								data={allData}
								toggleBtn={setDisabledBtn}/>
					
					<div className='mx-9 text-5xl'>{'>'}</div>
					<CardSelector
								data={savedCard}
								flag='to'/>
				</div>

				<input 
					type="text"
					placeholder='Перевести...'
					value={visibleInputValue}
					onChange={onChangeHandler}
					className={'p-2 block tracking-wider text-xl mx-auto mt-5 ' + borderClassName}/>

				<button 
					className={disabledBtn 	? 'mt-5 p-2 mx-auto block transition bg-slate-300 ' + borderClassName
											: 'mt-5 p-2 mx-auto block transition hover:bg-slate-300 ' + borderClassName} 
					disabled={disabledBtn}
					onClick={onClickHandler}>
						Отправить
				</button>
			</div>
		)
	}
	return <></>
}

export default Payments