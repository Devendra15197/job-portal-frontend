import { FileText } from 'lucide-react'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Card, CardContent } from '../../components/ui/card'
import { Label } from '../../components/ui/label'
import { resumes } from './DummyResumes'
import { Button } from '../../components/ui/button'
import { Eye } from 'lucide-react'


const SelectResume = ({ SelectedResume, setSelectedResume }) => {
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-slate-900 mb-2'>Select Resume</h2>
                <p className='text-slate-600'>Choose a resume to submit with your application.</p>
            </div>

            {resumes.length === 0 ? (
                <div className='text-center py-12 text-slate-500'>
                    <FileText className='h-10 w-10 mx-auto mb-3 text-slate-300' />
                    <p className='font-medium'>No Resumes Found</p>
                    <p className='text-sm mt-1'>
                        <button >Create Resume</button>

                        Before Applying</p>

                </div>
            ) : (
                <RadioGroup value={SelectedResume} onValueChange={setSelectedResume}>
                    <div>
                        {resumes.map((item) => (
                            <Card
                                onClick={() => setSelectedResume(String(item.id))}
                                key={item.id}
                                className={`cursor-pointer transition-colors ${SelectedResume === String(item.id)
                                    ? 'border-brand bg-blue-50'
                                    : 'hover:bg-slate-100'
                                    }`}
                            >
                                <CardContent className={"p-4"}>
                                    <div className='flex items-center gap-4'>
                                        <RadioGroupItem value={String(item.id)} className='mr-2' />
                                        <div className='flex items-center gap-3 flex-1'>
                                            <div className='h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0'>
                                                <FileText className='h-6 w-6 text-slate-500' />
                                            </div>
                                            <div className='flex-1 min-w-0'>
                                                <Label className={"font-medium text-slate-900 cursor-pointer block truncate"}>
                                                    {item.title}
                                                </Label>
                                                <span className={'inline-block text-xs px-2 py-1 mt-1 rounded-full truncate ${bg-slate-600 text-white'}>{item.resumeTemplate}</span>
                                                {item.isDefault && (<span className='ml-2 text-xs text-green-600 font-medium'>
                                                    Default
                                                </span>)}
                                            </div>
                                            <Button variant='outline' size='sm'>
                                                <Eye className='h-4 w-4 mr-2' />
                                                Preview
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </RadioGroup>
            )
            }
        </div >
    )
}

export default SelectResume
