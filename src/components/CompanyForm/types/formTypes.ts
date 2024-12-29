import { Timestamp } from 'firebase/firestore'
import { IpPortfolio } from './ipPortfolioTypes'

// Contact Types
export interface ContactInfo {
  email: string
  phone: string
}

export interface Contact {
  contactId: string
  name: string
  role: string
  contactInfo: ContactInfo
  linkedInProfile: string
  resumeMetadata: string
  notes: string
  createdAt: string
  updatedAt: string
}

// ... other interfaces remain the same ...

export interface CompanyFormValues {
  // Company Information
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  incorporationDate: Date | null
  organizationType: string
  sector: string[]
  companyLogo: string
  
  // Performance Metrics
  customerSatisfactionScore: number
  environmentalImpact: string
  grantMatchScore: number
  innovationScore: number
  queryPerformanceScore: number
  totalEmployeeCount: number
  
  // AI Analysis
  aiAnalysis: {
    aiAnalysisDate: Date | null
    aiAnalysisReady: boolean
    aiImprovementRecommendations: string
    aiReadinessDetails: string
  }
  
  // Client Information
  clientId: string
  
  // Financial Information
  annualFinancials: {
    year: number
    revenue: number
    profit: number
    rdExpense: number
  }
  financialDocuments: any[]

  // Contact Information
  addresses: Address[]
  socialMediaLinks: SocialMediaLink[]
  keyTeamMembers: TeamMember[]
  website: string

  // Personnel Information
  management: DemographicData
  ownership: DemographicData
  employeeCount: EmployeeCount

  // Contacts
  contacts: Contact[]
  secondaryContact: Omit<Contact, 'contactId'>

  // IP Portfolio
  ipPortfolios: IpPortfolio[]
}