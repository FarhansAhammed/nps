import { createClient } from '@supabase/supabase-js'

// Supabase Configuration
const SUPABASE_URL = 'https://yyjhynajujbmdhndaceg.supabase.co'
const SUPABASE_KEY = 'sb_publishable_3fanHy-uvbdQk3sJDNcgwA_foWvxvJB'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const admissionForm = document.getElementById('admissionForm')
const formStatus = document.getElementById('formStatus')

if (admissionForm) {
    admissionForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        const btn = admissionForm.querySelector('button')
        const originalText = btn.textContent
        
        btn.textContent = 'Submitting...'
        btn.disabled = true
        formStatus.textContent = ''
        formStatus.className = 'form-status'

        const formData = new FormData(admissionForm)
        const data = Object.fromEntries(formData.entries())

        // Handle residential address if same as permanent
        if (data.sameAsPermanent === 'on') {
            data.residentialAddress = data.permanentAddress
        }
        delete data.sameAsPermanent

        try {
            const { error } = await supabase
                .from('admissions')
                .insert([
                    {
                        student_name: data.studentFullName,
                        dob: data.studentDob,
                        father_name: data.fatherName,
                        father_contact: data.fatherContact,
                        mother_name: data.motherName,
                        mother_contact: data.motherContact,
                        parent_email: data.parentEmail || null,
                        permanent_address: data.permanentAddress,
                        residential_address: data.residentialAddress,
                        created_at: new Date().toISOString()
                    }
                ])

            if (error) throw error

            formStatus.textContent = 'Application submitted successfully! Our team will contact you shortly.'
            formStatus.className = 'form-status status-success'
            alert('Application submitted successfully!')
            admissionForm.reset()
            
            // Reset visibility of residential address if it was hidden
            const residentialAddressGroup = document.getElementById('residentialAddressGroup')
            if (residentialAddressGroup) residentialAddressGroup.style.display = 'block'
            
        } catch (error) {
            console.error('Error submitting application:', error)
            formStatus.textContent = 'Failed to submit application. Please try again or contact us directly. Error: ' + error.message
            formStatus.className = 'form-status status-error'
        } finally {
            btn.textContent = originalText
            btn.disabled = false
        }
    })
}
