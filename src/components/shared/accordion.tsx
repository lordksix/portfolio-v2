'use client';

import React, { ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  accordionItems: AccordionData[]
};

const AccordionDemo = ({ accordionItems }: Props) => (
  <Accordion.Root
    className="bg-sky-200 dark:bg-gray-200 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/10 dark:shadow-white/30"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {accordionItems.map(({
      header, content, value, classContent, classItem, classTrigger
    }) => (
      <AccordionItem
        value={value}
        key={uuidv4()}
        className={classContent}
      >
        <AccordionTrigger className={classItem}>{header}</AccordionTrigger>
        <AccordionContent className={classTrigger}>{content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className = '', value, ...props }: {
  children: ReactNode;
  className: string;
  value: string;
}, forwardedRef: React.Ref<HTMLDivElement>) => (
  <Accordion.Item
    value={value}
    className={classNames(
      'focus-within:shadow-purple-200 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ children, className = '', ...props }: {
  children: ReactNode;
  className: string;
}, forwardedRef: React.Ref<HTMLButtonElement>) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-yellow-500 shadow-yellow-500 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-sky-900 px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <FaChevronDown
        className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef(({ children, className = '', ...props }: {
  children: ReactNode;
  className: string;
}, forwardedRef: React.Ref<HTMLDivElement>) => (
  <Accordion.Content
    className={classNames(
      'text-sky-900 bg-gray-200 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = 'AccordionContent'

export default AccordionDemo;
