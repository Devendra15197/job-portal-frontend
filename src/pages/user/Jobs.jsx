import { Wand2 } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

const Jobs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='bg-linear-to-br from-primary via-blue-950 to-indigo-950 py-12 px-4'>
        <div className='max-w-4xl max-auto text-center'>
          <div className='inline-flex items-center gap-2 text-white bg-white/15 rounded-full mb-4 text-sm py-1.5 px-3 backdrop-blur-sm'>
            <Sparkles className="h-4 w-4" />
            AI-Powered Job Portal
          </div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-2'>Find Your Next Career Opportunity</h1>
          <p className='text-blue-100 mb-8 text-sm sm:text-base'>
            Discover the perfect job match with our AI-powered job portal.
          </p>

          {/* AI Search Card */}
          <div className='bg-white rounded-2xl shadow-xl p-4 space-y-3'>
            <div>
              <Wand2 className="h-6 w-6 text-blue-500" />
              <textarea></textarea>
              <div>
                <p>Tip: Ctrl + Enter to search</p>
                <Button><Wand2 />Search With AI</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jobs
