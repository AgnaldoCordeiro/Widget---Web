import {ChatTeardropDots} from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

  return (    
    <Popover className="tw-absolute tw-bottom-4 tw-right-4 md:tw-bottom-8 md:tw-right-8 tw-flex tw-flex-col tw-items-end tw-font-sans">
   <Popover.Panel><WidgetForm/></Popover.Panel> 
      <Popover.Button
        className="tw-bg-brand-500 tw-rounded-full tw-px-3 tw-h-12 tw-text-white tw-flex tw-items-center tw-group tw-border-none tw-font-sans"
      >
        <ChatTeardropDots className="tw-w-6 tw-h-6" />        
        <span className="tw-font-sans tw-max-w-0 tw-overflow-hidden group-hover:tw-max-w-xs tw-transition-all tw-duration-500 tw-ease-linear">
          <span className="tw-font-sans tw-p-2">
            Feedback
          </span>
        </span>
   </Popover.Button>
    </Popover>
  )
}