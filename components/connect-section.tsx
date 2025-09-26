import { Button } from "./ui/button"

export function ConnectSection() {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-gray-50 to-yellow-100 py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-white/90 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-center shadow-lg">
        <div className="mb-8">
          <img 
            src="/icons/phone-purple.svg" 
            alt="Phone Icon" 
            className="mx-auto h-16 w-16"
          />
        </div>
        <h2 className="mb-8 text-4xl font-bold tracking-tight">
          So, let's start, shall we?
        </h2>
        <Button 
          size="lg" 
          className="rounded-2xl bg-purple-800 px-8 py-6 text-lg font-semibold text-white hover:bg-purple-900"
        >
          Connect me to an expert!
        </Button>
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Best quality</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Top experts</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Quickest delivery</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
