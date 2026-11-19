import React from 'react'
import { Card, CardContent } from '../../components/ui/card'
import { Textarea } from '../../components/ui/textarea'
import { SparklesIcon } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Copy } from 'lucide-react'
import { RotateCcw } from 'lucide-react'

const tips = [
    "Highlight your relevant skills and experiences that match the job description.",
    "Mention specific achievements or projects that demonstrate your capabilities.",
    "Show enthusiasm for the role and the company, explaining why you're a good fit.",
    "Keep it concise - 3,4 paragraphs are usually sufficient. Avoid repeating your resume.",
]
const CoverLetterEditor = ({ coverLetter, setCoverLetter, selectedResume }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(coverLetter)
            .then(() => {
                console.log('Cover letter copied to clipboard!')
            })
            .catch((err) => {
                console.error('Failed to copy cover letter: ', err)
            })
    }
    return (
        <div className='space-y-6'>
            <div>
                <h2 className='text-2xl font-bold text-slate-900 mb-2'>Cover Letter</h2>
                <p className='text-slate-600'>Write a personalized cover letter or let AI help you craft one.</p>
            </div>

            {/* Ai Generate Card  */}
            <Card className={'border-blue-200 bg-linear-to-br from-blue-50 to-indigo-50'}>
                <CardContent className={'p-6'}>
                    <div className='flex items-start '>
                        <div className='h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0 mr-4'>
                            <SparklesIcon className='h-6 w-6 text-white' />
                        </div>
                        <div className='flex-1'>
                            <h3 className='font-semibold text-slate-900 mb-2'>AI-Powered Cover Letter</h3>
                            <p className='text-sm text-slate-700 mb-4'>
                                Let AI analyze the job description and your resume - skills, experience, and summary -
                                to create a personalized cover letter for you. You can edit it later to add your personal touch.
                            </p>
                            <Button className={'py-5'}><Sparkles className='w-4 h-4' /> Generate with AI</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Ai Writing Tips  */}
            <Card>
                <CardContent>
                    <div className='flex items-center justify-between mb-4'>
                        <h3 className='font-semibold text-slate-900'>AI Writing Tips</h3>
                        <Badge className='gap-1' variant={'secondary'}>
                            <Sparkles />
                            Personalize
                        </Badge>
                    </div>

                    <ul className='space-y-3'>
                        {tips.map((tip, index) => (
                            <li key={index} className='flex items-center gap-3'>
                                <div className='h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5'>
                                    <span className='text-xs font-semibold text-brand'>
                                        {index + 1}
                                    </span>
                                </div>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* Editor  */}
            <Card>
                <CardContent className={'p-6'}>
                    <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold text-slate-900'>Your Cover Letter</h3>
                            <div className='flex gap-2'>
                                <Button variant='outline' size='sm' onClick={handleCopy}>
                                    <Copy className='h-4 w-4 mr-2' />
                                    Copy
                                </Button>
                                <Button variant='outline' size='sm' onClick={() => setCoverLetter('')}>
                                    <RotateCcw />
                                    Clear
                                </Button>
                            </div>
                        </div>
                        <Textarea
                            placeholder='Write your cover letter here or click Generate with AI to create one for you.'
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className='min-h-100 font-mono text-sm'
                        />

                    </div>
                </CardContent>
            </Card>
        </div>

    )
}

export default CoverLetterEditor
