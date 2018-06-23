import React, { Component } from 'react';
import { Row, Col, Select, Radio, Button, Input, Checkbox, Avatar } from 'antd'
import QuestionaireStyleWrapper from '../styles/questionaire.style';
import QuestionaireQuestion from './question';

const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;

export default class extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      currentQuestionKey: '1',
      previousQuestionKey: '',
      progress: 0.0,
      questions: [
        {
          beginText: 'NAME',
          questionKey: 'name',
          input:
                <div> 
                  <div style={{ 'marginBottom': '20px'}}>MY NAME IS</div>
                  <div style={{display: 'inline-block'}}>
                    <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="Julie Joa" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                  </div>
                </div>,
          answer: '',
          order: '1'
        },
        {
          beginText: 'AGE',  
          questionKey: 'age',
          input:  
                <div> 
                  <div style={{ 'marginBottom': '20px'}}>I AM </div>
                  <div>
                    <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="34" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                  </div>
                  <div style={{ 'marginBottom': '20px'}}>YEARS OLD</div>
                </div>,
          answer: '',
          order: '2'
        },
        {
          beginText: 'HEIGHT',  
          questionKey: 'height',
          input:  <div> 
                    <div style={{}}>I AM </div>
                    <div>
                      <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="5'8" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                    </div>
                  </div>,
          answer: '',
          order: '3'
        },
        {
          beginText: 'WEIGHT',  
          questionKey: 'weight',
          input:  <div> 
                    <div>I WEIGH </div>
                    <div>
                      <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="145 lbs" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                    </div>
                  </div>,
          
          answer: '',
          order: '4'
        },
        {
          beginText: 'DRESS SIZE ',  
          questionKey: 'sizeDress',
          input:  <div> 
                    <div>I WEAR A </div>
                    <div>
                      <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="10" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                    </div>
                    <div> IN DRESSES</div>
                  </div>,
          answer: '',
          order: '5'
        },
        {
          beginText: 'The fun stuff!',  
          questionKey: 'fashionConsultantComfort-a',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Awesome. Thanks for sharing all that information. Let's move onto the fun stuff now...</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '6'
        },
        {
          beginText: 'HOW DO YOU FEEL ABOUT A FASHION CONSULTANT SELECTING A SWIMSUIT FOR YOU?',  
          questionKey: 'fashionConsultantComfort',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>HOW DO YOU FEEL ABOUT A FASHION CONSULTANT SELECTING A SWIMSUIT FOR YOU?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='GREAT!'>GREAT!</Option>
                      <Option value='Pretty Good!'>Pretty Good!</Option>
                      <Option value='Indifferent'>Indifferent</Option>
                      <Option value='NERVOUS!'>NERVOUS!</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'GREAT!',
              to: '7.1'
            },
            {
              value: 'Pretty Good!',
              to: '7.2'
            },
            {
              value: 'Indifferent',
              to: '7.3'
            },
            {
              value: 'NERVOUS!',
              to: '7.4'
            }
          ],
          answer: '',
          order: '7'
        },
        {
          beginText: 'Awesome. I am so excited to help you',  
          questionKey: 'fashionConsultantComfort-a',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Awesome. I am so excited to help you find the perfect suit!</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '7.1'
        },
        {
          beginText: 'Okay! Rest Assured I’m a pro at this and',  
          questionKey: 'fashionConsultantComfort-a',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Okay! Rest Assured I’m a pro at this and can’t wait for you to receive a swimsuit you love!</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '7.2'
        },
        {
          beginText: 'I want you to be excited! But I get it.',  
          questionKey: 'fashionConsultantComfort-a',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>I want you to be excited! But I get it. Has Swimwear Shopping been tough for  you in the past?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes'>Yes</Option>
                      <Option value='No, Not Really'>No, Not Really</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes',
              to: '7.3.1'
            },
            {
              value: 'No, Not Really',
              to: '7.3.2'
            },
          ],
          answer: '',
          order: '7.3'
        },
        {
          beginText: 'I understand. What is your greatest pain',  
          questionKey: 'fashionConsultantComfort-ab',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>I understand. What is your greatest pain when shopping for a new swimsuit?</p>
                    <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                  </div>,
          answer: '',
          order: '7.3.1'
        },
        {
          beginText: 'Well I’m about to make it one of your favorite things',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Well I’m about to make it one of your favorite things to shop for. Just give me a chance to prove it. See some of our happy customer testimonials here or would you like to begin a live chat?</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '7.3.2'
        },
        {
          beginText: 'I understand being nervous but let me help',  
          questionKey: 'fashionConsultantComfort-abcd',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>I understand being nervous but let me help you to relax a bit. We are going to learn as much as we can about your needs to make sure you get a swimsuit you love delivered to you. But, on the off chance it doesn’t work out, you can easily return it no problem!</p>
                    <p>Ready to keep going?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes'>Yes</Option>
                      <Option value="I'm still nervous.">I'm still nervous</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes',
              to: '7.4.1'
            },
            {
              value: "I'm still nervous.",
              to: '7.4.2'
            },
          ],
          answer: '',
          order: '7.4'
        },
        {
          beginText: 'Great! Let\'s get Started!',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Great! Let's get Started!</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '7.4.1'
        },
        {
          beginText: 'Let me tell you a little bit about our',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Let me tell you a little bit about our company and why we started...</p>
                    <div><a>Click Here to View Testimonials</a></div>
                    <div><a>Click here to start a Live Chat With Your Stylist</a></div>
                     

                  </div>,
          answer: '',
          order: '7.4.2'
        },
        {
          beginText: 'HOW DO YOU FEEL ABOUT SWIMSUIT SHOPPING IN GENERAL?',  
          questionKey: 'swimShoppingFeelings',
          input: <div style={{margin: '20px 0px'}}>
                    <p>HOW DO YOU FEEL ABOUT SWIMSUIT SHOPPING IN GENERAL?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='I LOVE IT!'>I LOVE IT!</Option>
                      <Option value="I HAVE MIXED FEELINGS">I HAVE MIXED FEELINGS</Option>
                      <Option value="I DREAD IT">I DREAD IT</Option>
                    </Select>
                  </div>,
          answer: '',
          order: '8',
          triggers: [
            {
              value: 'I LOVE IT!',
              to: '8.1'
            },
            {
              value: 'I HAVE MIXED FEELINGS',
              to: '8.2'
            },
            {
              value: 'I DREAD IT',
              to: '8.3'
            },
          ],
        },
        {
          beginText: 'Great, then you’ll really love shopping',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Great, then you’ll really love shopping with us.</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '8.1'
        },
        {
          beginText: 'How would you describe your comfort level ',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>I can understand that.</p>
                    <p>How would you describe your comfort level when wearing a swimsuit?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: '100%' }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='I feel confident if it’s the right fit for me'>I feel confident if it’s the right fit for me</Option>
                      <Option value="I have never felt confident in a swimsuit">I have never felt confident in a swimsuit</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'I feel confident if it’s the right fit for me',
              to: '8.2.1'
            },
            {
              value: 'I have never felt confident in a swimsuit',
              to: '8.2.2'
            },
          ],
          answer: '',
          order: '8.2'
        },
        {
          beginText: 'Great! That is exactly how We feel sometimes ',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Great! That is exactly how We feel sometimes and we’ll make sure to get you the right fit.</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '8.2.1'
        },
        {
          beginText: 'I’m sorry to hear that but I can’t say it isn’t common',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>I’m sorry to hear that but I can’t say it isn’t common. 2 out of 4 women say they have never felt confident in a swimsuit. Our team is here to change that.</p>
                    <p>Would you like some tips on being more confident?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='No, let’s just keep going'>No, let’s just keep going</Option>
                      <Option value="Yes, I would like some tips">Yes, I would like some tips</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes, I would like some tips',
              to: '8.2.2.2'
            },
          ],
          answer: '',
          order: '8.2.2'
        },
        {
          beginText: '#1 is to find a swimsuit that fits your really well',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>#1 is to find a swimsuit that fits your really well so you can move around comfortably, we will be taking care of that for you.</p>
                    <p>#2, it may sound silly but try wearing your swimsuit around the house when you first get it in the mail. The more you wear it, the more comfortable you’ll feel in it.</p>
                    <p>#3, check yourself out in the mirror and focus on the the things you DO like. Then focus on these things when you’re wearing it in public.</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 8000,
          callback: this.navigateScene.bind(this),
          order: '8.2.2.2'
        },
        {
          beginText: 'Oh no. This is actually the main reason Julie Joa Swim was started',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Oh no. This is actually the main reason Julie Joa Swim was started in the first place. We’ve made it our mission to change this for you! Let’s get started.</p>
                    <p>Would you like some tips on being more confident?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='No, let’s just keep going'>No, let’s just keep going</Option>
                      <Option value="Yes, I would like some tips">Yes, I would like some tips</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes, I would like some tips',
              to: '8.3.1'
            },
          ],
          answer: '',
          order: '8.3'
        },
        {
          beginText: '1 is to find a swimsuit that fits your reall',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>#1 is to find a swimsuit that fits your really well so you can move around comfortably, we will be taking care of that for you.</p>
                    <p>#2, it may sound silly but try wearing your swimsuit around the house when you first get it in the mail. The more you wear it, the more comfortable you’ll feel in it.</p>
                    <p>#3, check yourself out in the mirror and focus on the the things you DO like. Then focus on these things when you’re wearing it in public.</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 8000,
          callback: this.navigateScene.bind(this),
          order: '8.3.1'
        },
        {
          beginText: 'I HAVE RECENTLY...',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>I HAVE RECENTLY...</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='HAD A BABY'>HAD A BABY</Option>
                      <Option value="GOTTEN ENGAGED/MARRIED">GOTTEN ENGAGED/MARRIED</Option>
                      <Option value="LOST WEIGHT">LOST WEIGHT</Option>
                      <Option value="GAINED WEIGHT">GAINED WEIGHT</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'HAD A BABY',
              to: '9.1'
            },
            {
              value: 'GOTTEN ENGAGED/MARRIED',
              to: '9.2'
            },
            {
              value: 'LOST WEIGHT',
              to: '9.3'
            },
            {
              value: 'GAINED WEIGHT',
              to: '9.4'
            },
          ],
          answer: '',
          order: '9'
        },
        {
          beginText: 'Do any of these feelings apply to you?',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Do any of these feelings apply to you?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: '100%', whiteSpace: 'normal !important'}}
                      placeholder={'Select An Answer'}

                    >
                      <Option value='I feel my breasts have sagged/shrunken a little as a result of having a baby'>I feel my breasts have sagged/shrunken a little as a result of having a baby</Option>
                      <Option value="I’m experiencing a large bra size for the first time">I’m experiencing a large bra size for the first time</Option>
                      <Option value="I would like to hide a c-section scar for now">I would like to hide a c-section scar for now</Option>
                      <Option value="I am experiencing no concerns related to swimwear as a result of having a baby">I am experiencing no concerns related to swimwear as a result of having a baby</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'I feel my breasts have sagged/shrunken a little as a result of having a baby',
              to: '9.1.99'
            },
            {
              value: 'I’m experiencing a large bra size for the first time',
              to: '9.1.2'
            },
            {
              value: 'I would like to hide a c-section scar for now',
              to: '9.1.99'
            },
            {
              value: 'I am experiencing no concerns related to swimwear as a result of having a baby',
              to: '9.1.99'
            },
          ],
          answer: '',
          order: '9.1'
        },
        {
          beginText: '',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Babies certainly do take a toll on our bodies! We get that...</p>
                    <p>We will keep that in mind as we pick the right suit.</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '9.1.99'
        },
        {
          beginText: '',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Ok, how many cup sizes would you say you have gained?</p>
                    <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="Julie Joa" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                  </div>,
          answer: '',
          order: '9.1.2'
        },
        {
          beginText: 'Did you give us your new bra size?',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Did you give us your new bra size?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes, I did'>Yes, I did</Option>
                      <Option value="No, I did not">No, I did not</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes, I did',
              to: '9.1.1.2'
            },
            {
              value: 'No, I did not',
              to: '9.1.1.1'
            },
          ],
          answer: '',
          order: '9.1.1'
        },
        {
          beginText: '',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Ok, how many cup sizes would you say you have gained?</p>
                    <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="Julie Joa" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                  </div>,
          answer: '',
          order: '9.1.1.1'
        },
        {
          beginText: 'Ok, We will certainly take that into account.',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Ok, We will certainly take that into account.</p>
                  </div>,
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '9.1.1.2'
        },
        {
          beginText: 'Will you be needing any specific swimwear/beachwear for an upcoming bachelorette, or honeymoon?',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p> Will you be needing any specific swimwear/beachwear for an upcoming bachelorette, or honeymoon?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes'>Yes</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes',
              to: '9.2.1'
            },
            {
              value: 'No',
              to: '9.2.2'
            },
          ],
          answer: '',
          order: '9.2'
        },
        {
          beginText: 'OK, we will keep that in mind ;)',
          questionKey: '',
          input:  <div>
                    <p>OK, we will keep that in mind ;)</p>
                  </div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '9.2.1'
        },
        {
          beginText: 'Ok, we’ll be sure to select a general style that',
          questionKey: '',
          input:  <div>
                    <p> Ok, we’ll be sure to select a general style that can be used for all occasions.</p>
                  </div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '9.2.2'
        },
        {
          beginText: 'Do we have your new sizes from the info you gave us earlier?',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Do we have your new sizes from the info you gave us earlier?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes'>Yes</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes',
              to: '9.3.1'
            },
            {
              value: 'No',
              to: '9.3.2'
            },
          ],
          answer: '',
          order: '9.3'
        },
        {
          beginText: '',
          questionKey: '',
          input:  <div>
                    <p>OK, Great!</p>
                  </div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '9.3.1'
        },
        {
          beginText: '',
          questionKey: '',
          input:  <div>
                    <p> Ok, please grab a tape measure and follow our guide on how to take the best measurements.</p>
                  </div>,
          endText: '.',
          answer: '',
          order: '9.3.2'
        },
        {
          beginText: 'Do we have your new sizes from the info you gave us earlier?',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>Do we have your new sizes from the info you gave us earlier?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes'>Yes</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes',
              to: '9.4.1'
            },
            {
              value: 'No',
              to: '9.4.2'
            },
          ],
          answer: '',
          order: '9.4'
        },
        {
          beginText: '',
          questionKey: '',
          input:  <div>
                    <p>OK, Great!</p>
                  </div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '9.4.1'
        },
        {
          beginText: '',
          questionKey: '',
          input:  <div>
                    <p> Ok, please grab a tape measure and follow our guide on how to take the best measurements.</p>
                  </div>,
          endText: '.',
          answer: '',
          order: '9.4.2'
        },
        {
          beginText: 'MY BIGGEST CONCERN WHEN SHOPPING FOR A NEW SWIMSUIT HAS TO DO WITH:',  
          questionKey: 'fashionConsultantComfort-abc',
          input:  <div style={{margin: '20px 0px'}}>
                    <p>MY BIGGEST CONCERN WHEN SHOPPING FOR A NEW SWIMSUIT HAS TO DO WITH:</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='MY CHEST'>MY CHEST</Option>
                      <Option value="MY BUTT">MY BUTT</Option>
                      <Option value="MY MID SECTION">MY MID SECTION</Option>
                      <Option value="MY THIGHS">MY THIGHS</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'MY CHEST',
              to: '10.1'
            },
            {
              value: 'MY BUTT',
              to: '10.2'
            },
            {
              value: 'MY MID SECTION',
              to: '10.3'
            },
            {
              value: 'MY THIGHS',
              to: '10.4'
            },
            {
              value: 'MY ARMS',
              to: '10.5'
            },
            {
              value: 'IT IS SOMETHING ELSE',
              to: '10.6'
            },
          ],
          answer: '',
          order: '10'
        },
        {
          beginText: 'Ok, Let\'s talk about what concerns you about your chest area',
          questionKey: '',
          input:  <div>
                    <p> Ok, Let's talk about what concerns you about your chest area.</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='I require a lot of support in my chest'> I require a lot of support in my chest</Option>
                      <Option value="I would like my breasts to appear more perky">I would like my breasts to appear more perky</Option>
                      <Option value="My breasts are unevenly sized, so support is an issue as a result">My breasts are unevenly sized, so support is an issue as a result</Option>
                      <Option value="I would like my breasts to appear larger">I would like my breasts to appear larger</Option>
                      <Option value="Its something else">Its something else</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'I require a lot of support in my chest',
              to: '10.1.1'
            },
            {
              value: 'I would like my breasts to appear more perky',
              to: '10.1.2'
            },
            {
              value: 'My breasts are unevenly sized, so support is an issue as a result',
              to: '10.1.3'
            },
            {
              value: 'I would like my breasts to appear larger',
              to: '10.1.4'
            },
            {
              value: 'Its something else',
              to: '10.1.5'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.1'
        },
        {
          beginText: '*1 out of 2 women in the U.S. share this same need as',
          questionKey: '',
          input:  <div>
                    <p>*1 out of 2 women in the U.S. share this same need as you! Let’s find out more about your specific needs..</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                    >
                      <Option value='I feel I have a small frame in proportion to my bust'> I feel I have a small frame in proportion to my bust</Option>
                      <Option value="I often find myself having to re-adjust my swimsuit top"> I often find myself having to re-adjust my swimsuit top</Option>
                      <Option value="I usually can’t find a swim top that is big enough for me"> I usually can’t find a swim top that is big enough for me</Option>
                      <Option value="I would like my breasts to appear larger">I would like my breasts to appear larger</Option>
                      <Option value="Its something else">Its something else</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.1.1'
        },
        {
          beginText: 'So many things cause our breasts to sag a little over time, and every woman experiences it. What do you prefer?',
          questionKey: '',
          input:  <div>
                    <p>So many things cause our breasts to sag a little over time, and every woman experiences it. What do you prefer?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='I don’t mind something with a little push-up built in'> I don’t mind something with a little push-up built in</Option>
                      <Option value="Would prefer no padding"> Would prefer no padding</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '', 
          order: '10.1.2'
        },
        {
          beginText: 'Did you know almost every woman has some degree ',
          questionKey: '',
          input:  <div>
                    <p>Did you know almost every woman has some degree of unevenness in her breasts? </p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='My breasts are less than one full cup size different in size from one another'> My breasts are less than one full cup size different in size from one another</Option>
                      <Option value="My breasts are more than one full cup size different in size from one another"> My breasts are more than one full cup size different in size from one another</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.1.3'
        },
        {
          beginText: 'What we can do is make sure your swimsuit accentuates your natural',
          questionKey: '',
          input:  <div>
                    <p>What we can do is make sure your swimsuit accentuates your natural bust in the best way possible. Certain styles help to create the most cleavage regardless of size. </p>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.1.4'
        },
        {
          beginText: 'Let\'s talk about more specific issues for a second:',
          questionKey: '',
          input:  <div>
                    <p>Let's talk about more specific issues for a second: </p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='My Areola is large and often not covered properly'>My Areola is large and often not covered properly</Option>
                      <Option value="I have a scar I would like to cover">I have a scar I would like to cover</Option>
                      <Option value="I have stretch marks I would like to cover">I have stretch marks I would like to cover</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'My Areola is large and often not covered properly',
              to: '10.1.5.1'
            },
            {
              value: 'I have a scar I would like to cover',
              to: '10.1.5.2'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.1.5'
        },
        {
          beginText: 'We know exactly what you mean and this problem can be embarrassing.',
          questionKey: '',
          input:  <div>
                    <p>We know exactly what you mean and this problem can be embarrassing. We’ve got you covered, don’t worry.</p>
                  </div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '10.1.5.1'
        },
        {
          beginText: 'Please describe the placement of your scar:',
          questionKey: '',
          input:  <div>
                    <p>Please describe the placement of your scar:</p>
                    <Input size="large" onChange={(e) => this.answerQuestion(e.target.value)} placeholder="Lower back" style={{border: '0px', borderBottom: '1px solid black', fontSize: '20px', fontWeight: '800'}} className="buttonTest"/>,
                  </div>,
          endText: '.',
          answer: '',
          order: '10.1.5.2'
        },
        {
          beginText: 'Stretch marks are a natural process as our breast tissue changes',
          questionKey: '',
          input:  <div>
                    <p>Stretch marks are a natural process as our breast tissue changes in size or shape. We do have styles that offer a more full coverage but no swimsuit will cover a breast entirely unless you wear a high neck cut.</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes'>Yes</Option>
                      <Option value="No, just a fuller coverage cup is fine."> No, just a fuller coverage cup is fine.</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.1.5.3'
        },
        {
          beginText: 'Let\'s talk about the concerns you have about your butt',
          questionKey: '',
          input:  <div>
                    <p>Let's talk about the concerns you have about your butt</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='I feel my butt appears to be flat and would love to make it fuller'>I feel my butt appears to be flat and would love to make it fuller</Option>
                      <Option value="I feel my butt is very wide and would like to make it appear smaller">I feel my butt is very wide and would like to make it appear smaller</Option>
                      <Option value="I have cellulite/ stretch marks that no one else needs to see">I have cellulite/ stretch marks that no one else needs to see</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'I feel my butt appears to be flat and would love to make it fuller',
              to: '10.2.1'
            },
            {
              value: 'I feel my butt is very wide and would like to make it appear smaller',
              to: '10.2.2'
            },
            {
              value: 'I have cellulite/ stretch marks that no one else needs to see',
              to: '10.2.3'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.2'
        },
        {
          beginText: 'Ah yes, the J-lo butt. ',
          questionKey: '',
          input:  <div>
                    <p>Ah yes, the J-lo butt. Don’t we all want one? There are definitely styles to accentuate even the smallest of bottoms, would you be comfortable in a Brazilian cut or boy short?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes, the smaller the swimsuit the better'>Yes, the smaller the swimsuit the better</Option>
                      <Option value="No, I’d rather have a fuller coverage swim bottom">No, I’d rather have a fuller coverage swim bottom</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.2.1'
        },
        {
          beginText: 'You are so not alone. 2 out of the 4 women we surveyed said the same thing. Solid colors are best to achieve this, would you be ok with wearing a solid color?',
          questionKey: '',
          input:  <div>
                    <p>You are so not alone. 2 out of the 4 women we surveyed said the same thing. Solid colors are best to achieve this, would you be ok with wearing a solid color?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes, whatever works best'>Yes, whatever works best</Option>
                      <Option value="No, I really love prints">No, I really love prints</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes, whatever works best',
              to: '10.2.2.1'
            },
            {
              value: 'No, I really love prints',
              to: '10.2.2.2'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.2.2'
        },
        {
          beginText: 'Thanks for sharing your concerns. We will certainly keep those in mind.',
          questionKey: 'final',
          input:  <div>Thanks for sharing your concerns. We will certainly keep those in mind.</div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '10.2.2.1'
        },
        {
          beginText: 'Thanks for sharing your concerns. We will focus on minimizing styles in a print',
          questionKey: 'final',
          input:  <div>Thanks for sharing your concerns. We will focus on minimizing styles in a print</div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '10.2.2.2'
        },
        {
          beginText: 'We can assure you no one is focusing on it more than you, BUT we cover it up ourselves so who are we to talk! Is it mostly on the inner butt-cheek or near your hips?',
          questionKey: '',
          input:  <div>
                    <p>We can assure you no one is focusing on it more than you, BUT we cover it up ourselves so who are we to talk! Is it mostly on the inner butt-cheek or near your hips?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Inner cheek'>Inner cheek</Option>
                      <Option value="Outer cheek/sides near my hips">Outer cheek/sides near my hips</Option>
                      <Option value="Both areas">Both areas</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.2.3'
        },
        {
          beginText: 'Do you want to cover your midsection completely?',
          questionKey: '',
          input:  <div>
                    <p>Do you want to cover your midsection completely?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='No, I want to wear a two piece'>No, I want to wear a two piece</Option>
                      <Option value="Yes, I would like a one piece">Yes, I would like a one piece</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'No, I want to wear a two piece',
              to: '10.3.1'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.3'
        },
        {
          beginText: 'Are you thinking tankini or bikini style?',
          questionKey: '',
          input:  <div>
                    <p>Are you thinking tankini or bikini style?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Tankini'>Tankini</Option>
                      <Option value="Bikini bottom with a high waist">Bikini bottom with a high waist</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.3.1'
        },
        {
          beginText: 'Let\'s talk about the concerns you have about your thighs...',
          questionKey: '',
          input:  <div>
                    <p>Let's talk about the concerns you have about your thighs...</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='I want to minimize their appearance as much as possible'>I want to minimize their appearance as much as possible</Option>
                      <Option value="I would like to make my thighs appear bigger and more muscular">I would like to make my thighs appear bigger and more muscular</Option>
                      <Option value="I have cellulite/stretch marks I’d like to cover">I have cellulite/stretch marks I’d like to cover</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'I want to minimize their appearance as much as possible',
              to: '10.4.1'
            },
            {
              value: 'I would like to make my thighs appear bigger and more muscular',
              to: '10.4.2'
            },
            {
              value: 'I have cellulite/stretch marks I’d like to cover',
              to: '10.4.3'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.4'
        },
        {
          beginText: 'A skirted bottom works well for this. Do you like that option?',
          questionKey: '',
          input:  <div>
                    <p>A skirted bottom works well for this. Do you like that option?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes!'>Yes!</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </div>,
          triggers: [
            {
              value: 'Yes!',
              to: '10.4.1.1'
            },
            {
              value: 'No',
              to: '10.4.1.2'
            },
          ],
          endText: '.',
          answer: '',
          order: '10.4.1'
        },
        {
          beginText: 'Surely a skirted bottom will work well for your needs.',
          questionKey: 'final',
          input:  <div></div>,
          endText: '.',
          answer: '',
          order: '10.4.1.1'
        },
        {
          beginText: 'Okay, your other option is to add in a gorgeous cover up to wear out of the water.',
          questionKey: '',
          input:  <div>
                    <p>Okay, your other option is to add in a gorgeous cover up to wear out of the water.</p>
                    <p>Would you like us to send one with your order?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes, sounds great!'>Yes, that's perfect!</Option>
                      <Option value="No thank you!">No thank you!</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.4.1.2'
        },
        {
          beginText: 'A boy short option gives the appearance of a sportier physique. ',
          questionKey: '',
          input:  <div>
                    <p>A boy short option gives the appearance of a sportier physique. </p>
                    <p>Would you want to give that a try?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Yes, sounds great!'>Yes, sounds great!</Option>
                      <Option value="No, I don’t think so">No, I don’t think so</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.4.2'
        },
        {
          beginText: 'Would you like us to end a skirted swim bottom or add in a gorgeous cover-up to your order?',
          questionKey: '',
          input:  <div>
                    <p>Would you like us to end a skirted swim bottom or add in a gorgeous cover-up to your order?</p>
                    <Select
                      size={'large'}
                      onChange={(e) => this.answerQuestion(e)}
                      style={{ width: 300 }}
                      placeholder={'Select An Answer'}
                    >
                      <Option value='Skirted Bottom'>Skirted Bottom</Option>
                      <Option value="Gorgeous Cover-up">Gorgeous Cover-up</Option>
                      <Option value="Neither, I’ll just have my thighs show. It’s fine  with me after all!">Neither, I’ll just have my thighs show. It’s fine  with me after all!</Option>
                    </Select>
                  </div>,
          endText: '.',
          answer: '',
          order: '10.4.3'
        },
        {
          beginText: 'ARE THERE ANY STYLES YOU WILL ABSOLUTELY NOT WEAR?',
          questionKey: 'final',
          input:  <div>
                  <p>ARE THERE ANY STYLES YOU WILL ABSOLUTELY NOT WEAR?</p>
                  <br/>
                  <p>I don’t want to wear:</p>
                    {['A swimsuit top with underwire', 'A Halter Top', 'An over-the-shoulder bra-style top', 'A Strapless', 'A Crop Top', 'An off-the-shoulder'].map((option) => {
                    return (
                      <div style={{textAlign: 'left'}}>
                        <Checkbox>{option}</Checkbox><br/>
                      </div>
                    )
                  })} 
                  </div>,
          endText: '.',
          answer: '',
          order: '11'
        },
        {
          beginText: 'ARE THERE ANY STYLES YOU ABSOLUTELY PREFER TO WEAR?',
          questionKey: 'final',
          input:  <div>
                  <p>ARE THERE ANY STYLES YOU ABSOLUTELY PREFER TO WEAR?</p>
                  <br/>
                    {['A swimsuit top with underwire', 'A Halter Top', 'An over-the-shoulder bra-style top', 'A Strapless', 'A Crop Top', 'An off-the-shoulder'].map((option) => {
                    return (
                      <div style={{textAlign: 'left'}}>
                        <Checkbox>{option}</Checkbox><br/>
                      </div>
                    )
                  })} 
                  </div>,
          endText: '.',
          answer: '',
          order: '12'
        },
        {
          beginText: 'WHAT COLORS DO YOU PREFER FOR YOUR SWIMWEAR?',
          questionKey: 'final',
          input:  <div style={{textAlign: 'left !important'}}>
                  <p>WHAT COLORS DO YOU PREFER FOR YOUR SWIMWEAR?</p>
                  {['Black', 'Neutral Colors', 'Bright Colors', 'Bold Colors', 'Earthy Shades', 'No preference' ].map((option) => {
                    return (
                      <div style={{textAlign: 'left'}}>
                        <Checkbox label={option} value={option}/>{` ` + option}<br/>
                      </div>
                    )
                  })} 
                  <br/>
                  </div>,
          endText: '.',
          answer: '',
          order: '13'
        },
        {
          beginText: 'Thanks for sharing your concerns. We will certainly keep those in mind.',
          questionKey: 'final',
          input:  <div>Thanks for sharing your concerns. We will certainly keep those in mind.</div>,
          endText: '.',
          answer: '',
          autoStep: true,
          delay: 3000,
          callback: this.navigateScene.bind(this),
          order: '14'
        },
        {
          beginText: 'Thanks for your participation',
          questionKey: 'final',
          input:  <div>
                    <p>Okay You Are Almost Done! I will reach out to you if I have any questions but everything looks really good! I am so excited for you to receive your swimsuits! </p>
                    <br/><br/>
                    <Row>
                      <Col span={24}>
                        
                        <div style={{marginBottom: '20px'}}><Avatar size={'large'} src="data:image/jpeg;base64,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" /></div>
                        <div>
                          <p>Julie</p>
                          <p style={{fontStyle: 'italic', 'fontSize': '12px'}}>(Your Swimsuit Stylist)</p>
                        </div>
                        
                      </Col>
                      
                    </Row>
                    
                  </div>,
          endText: '.',
          answer: '',
          order: '15'
        },
      ]
    }
  }

  getCurrentQuestion() {
    return this.state.questions.find((x) => x.order == this.state.currentQuestionKey)
  }

  getProgress() {
    return (this.state.currentQuestionKey.split(".")[0] - 1) / 15
  }

  //If the current question was triggered by the previous question, we either want to traverse deeper or back out.
  // We don't want to traverse on the same level.
  currentQuestionTriggeredByPreviousQuestion() {
    const previousQuestion = this.state.questions.find(x => x.order == this.state.previousQuestionKey);
    return previousQuestion && previousQuestion.triggers &&  previousQuestion.triggers.findIndex(x => x.to == this.state.currentQuestionKey) > -1
  }

  recursivelyTraverseUpward(currAddress) {
    var finalAddress;
    const addressParts = currAddress.split(".");
    let triggers = [];
    this.state.questions.map((question) => {
      if (question.triggers) {triggers = triggers.concat(question.triggers)}
    });
      //We want to check if the currAddress is a triggered question. If so, we need to go up one more level 
    const question = this.state.questions.find(x => x.order == currAddress);
    if (triggers.find(x => x.to == currAddress) || !question) {
      return this.recursivelyTraverseUpward(addressParts.slice(0, addressParts.length - 1).join("."))
    }
    else {
      return currAddress;
    }
  }

  setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
  }

  navigateScene() {
    const currentQuestion = this.state.questions.find(x => x.order == this.state.currentQuestionKey);
    if (currentQuestion.triggers && currentQuestion.triggers.find(x => x.value == currentQuestion.answer)) {
      const trigger = currentQuestion.triggers.find(x => x.value == currentQuestion.answer);
      const progress = this.getProgress();
      this.setState({
        currentQuestionKey: trigger.to,
        previousQuestionKey: currentQuestion.order,
        progress
      })  
    }
    else {
      var questionAddress = currentQuestion.order.split(".");
      //There are only three options
      //1. You can go one level deeper
      //2. You can go on the same level, just adding one.
      //3. You can go one level higher. 
      //4. The questions are over. 
      var deeperLevelAddress = currentQuestion.order + ".1"
      var traverseDeeper = this.state.questions.findIndex(x => x.order == deeperLevelAddress) > -1;
      
      var sameLevelAddress = "";
      questionAddress.map((part, index) => {
        if (index == questionAddress.length - 1) {
          sameLevelAddress += `${(Number(part) + 1).toString()}`
        }
        else {
          sameLevelAddress += `${part.toString()}.`
        }
      })
      var higherLevelAddress = "";
      questionAddress.map((part, index) => {
        if (index == questionAddress.length - 2) {
          higherLevelAddress += `${(Number(part) + 1).toString()}`
        }
        else if(index < questionAddress.length - 2) {
          higherLevelAddress += `${part.toString()}.`
        }
      })

      var traverseOnSameLevel = this.state.questions.findIndex(x => x.order == sameLevelAddress) > -1 && !this.currentQuestionTriggeredByPreviousQuestion();
      var traverseHigher = this.state.questions.findIndex(x => x.order == higherLevelAddress) > -1;
      if (traverseOnSameLevel) {
        const progress = this.getProgress();
        this.setState({
          currentQuestionKey: sameLevelAddress,
          previousQuestionKey: currentQuestion.order,
          progress
        })
      }
      else  {
        var recursedHigherLevelAddress = this.recursivelyTraverseUpward(currentQuestion.order);
        var nextSiblingAddress = this.moveOnSiblingLevel(recursedHigherLevelAddress);
        const progress = this.getProgress();
        this.setState({
          currentQuestionKey: nextSiblingAddress,
          previousQuestionKey: currentQuestion.order,
          progress
        })
      }

    }
  }

  moveOnSiblingLevel(address) {
    var addressParts = address.split(".");
    const lastIndex = addressParts.length - 1;
    const nextValue = Number(addressParts[lastIndex]) + 1;
    addressParts[lastIndex] = nextValue;
    return addressParts.join(".");
  }

  answerQuestion(value) {
    const questionIndex = this.state.questions.findIndex(x => x.order == this.state.currentQuestionKey);
    const question = this.state.questions[questionIndex];
    question.answer = value;
    const questions = this.state.questions;
    questions[questionIndex] = question;
    this.setState({
      questions
    })
  }

  getCurrentImage() {
    const progress  = this.state.progress * 100;
    if (progress >= 0 && progress < 20 ) {
      return "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/13920488_891980817573663_409022022472900538_o.jpg?_nc_cat=0&oh=3c8d78c0ff00a2fa0aad79c459282b78&oe=5BB18DB7"
    }
    if (progress >= 20 && progress < 40 ) {
      return 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/18620838_1161660327272376_9085363767817303550_o.jpg?_nc_cat=0&oh=c9a7cc7d44d0ec29e9ce366f26743756&oe=5BA43740'
    }
    if (progress >= 40 && progress < 60 ) {
      return 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/11144940_829297497175329_5926370979536051212_o.jpg?_nc_cat=0&oh=63b95ab31f720ad9bb6c87e9a4c63cd2&oe=5BA9F374'
    }
    if (progress >= 60 && progress < 80 ) {
      return 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/13166018_848453818593030_5637020492663152058_n.png?_nc_cat=0&oh=68fbf3a56445f6bb7d1977b8b731dd10&oe=5BAF4E12'
    }
    if (progress >= 80) {
      return 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/13920488_891980817573663_409022022472900538_o.jpg?_nc_cat=0&oh=3c8d78c0ff00a2fa0aad79c459282b78&oe=5BB18DB7'
    }
  }

  getCurrentImageStyle() {
    const progress  = this.state.progress * 100;
    if (progress >= 0 && progress < 20 ) {
      return {opacity: '.5'}
    }
    if (progress >= 20 && progress < 40 ) {
      return {"backgroundSize": 'cover !important', opacity: '1.0 !important', filter: 'grayscale(100%)'}
    }
    if (progress >= 40 && progress < 60 ) {
      return {opacity: '.2'}
    }
    if (progress >= 60 && progress < 80 ) {
      return {opacity: '.7'}
    }
    if (progress >= 80) {
      return {opacity: '.5'}
    }
  }

  render() {
    const currentQuestion = this.getCurrentQuestion();
    const imageStyle = this.getCurrentImageStyle();
    return (
      <QuestionaireStyleWrapper>
        <Row style={{ height: '100%'}}>
          <Col span={14} style={{ backgroundImage: this.getCurrentImage(), height: '100%'}}>
            <img src={this.getCurrentImage()} style={{height: '100%'}}/>
          </Col>
          <Col span={10} style={{ height: '100%', backgroundColor: 'white'}}>
            <div>
              {
                window.location.href.indexOf("development=true") > -1 && 
                  <Row>
                    <Col span={12}>
                      <span style={{fontSize: '10px', color: 'white'}}> FOR DEVELOPMENT PURPOSES ONLY ----------  </span>   
                    </Col>
                    <Col span={12}>
                      <Select
                        size={'small'}
                        onChange={(e) => this.setState({currentQuestionKey: e})}
                        style={{ width: 300 }}
                        placeholder={'Select An Answer'}
                      >
                      {this.state.questions.map((question) => {
                          return <Option key={question.order} value={question.order}>{question.beginText + " " + question.endText}</Option>
                        })}
                      </Select>
                    </Col>
                  </Row>
              }
              
           
            
              
          </div>
          <div className="isoFormContent" style={{height: '100%'}}>
            <Row>
              <Col span={12}>
                <p style={{borderBottom: '1px solid grey', 'fontSize': '24px'}}>FIT ME GUIDE</p>
              </Col>
              <Col span={10} offset={2}>
                <div id="myProgress">
                  <div style={{'line-height': '38px', display: 'inline-block', verticalAlign: 'top', width: `${this.state.progress * 100}%`}} id="myBar"> </div>
                  <div style={{'line-height': '38px', display: 'inline-block', float: 'right', marginRight: '5px', color: 'white', fontWeight: '900', fontSize: '20px', zIndex: '1'}}>{`${Math.round(this.state.progress * 100)}%`}</div>
                </div>
              </Col>
            </Row>
            
            <Row type="flex" justify="center" align="middle" style={{height: '100%'}}>
            
              
                
              
              <Col span={24} style={{height: '100% !important'}}>
                <QuestionaireQuestion 
                  helperText={"Here is some helper text"}
                  beginText={currentQuestion.beginText} 
                  input={
                    currentQuestion.input
                  }
                  key={currentQuestion.order}
                  endText={currentQuestion.endText}
                  autoStep={currentQuestion.autoStep}
                  delay={currentQuestion.delay}
                  callback={currentQuestion.callback}

                />
              </Col>


                
                
            </Row>
            <div style={{marginTop: '30px', textAlign: 'center', width: '100%'}}>
              {
                this.state.currentQuestionKey == '15' && 
                  <Button style={{width: '100%', marginBottom: '20px', border: '1px solid #158daf', color: 'white', 'backgroundColor':'#158daf'}}>
                    Let's Order A Suit!
                  </Button>
              }
              {
                this.state.currentQuestionKey == '1' && 
                  <Button style={{width: '100%', marginBottom: '20px', border: '1px solid #158daf', color: 'white', 'backgroundColor':'#158daf'}} onClick={() => this.navigateScene()}>
                    Continue
                  </Button>
              }
              {
                !currentQuestion.autoStep && this.state.currentQuestionKey != '15' && this.state.currentQuestionKey != '1' &&
                  <div>
                    <Button style={{width: '100%', marginBottom: '20px', border: '1px solid #158daf', color: 'white', 'backgroundColor':'#158daf'}} onClick={() => this.navigateScene()}>
                      Continue
                    </Button>
                    <Button ghost style={{width: '100%', border: '1px solid black', color: 'black'}}>
                      Back
                    </Button>
                  </div>
              }
                
            </div>


            
          </div>
          </Col>
        </Row>
      </QuestionaireStyleWrapper>
    );
  }
}
