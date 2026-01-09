import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import type { ResumeData } from "@/app/page"

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    color: "#1a1a1a",
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 9,
    color: "#666",
  },
  contactItem: {
    flexDirection: "row",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    color: "#1a1a1a",
  },
  summary: {
    fontSize: 10,
    color: "#333",
    lineHeight: 1.6,
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
  },
  company: {
    fontSize: 10,
    color: "#555",
    marginBottom: 2,
  },
  dateLocation: {
    fontSize: 9,
    color: "#666",
    textAlign: "right",
  },
  description: {
    fontSize: 10,
    color: "#333",
    marginTop: 4,
    lineHeight: 1.5,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
  },
  institution: {
    fontSize: 10,
    color: "#555",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skill: {
    fontSize: 9,
    backgroundColor: "#f0f0f0",
    padding: "4 8",
    borderRadius: 3,
    color: "#333",
  },
})

type ResumePDFProps = {
  data: ResumeData
}

export function ResumePDF({ data }: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.personalInfo.fullName || "Your Name"}</Text>
          <View style={styles.contactInfo}>
            {data.personalInfo.email && <Text>{data.personalInfo.email}</Text>}
            {data.personalInfo.phone && <Text>{data.personalInfo.phone}</Text>}
            {data.personalInfo.location && <Text>{data.personalInfo.location}</Text>}
            {data.personalInfo.linkedin && <Text>{data.personalInfo.linkedin}</Text>}
            {data.personalInfo.website && <Text>{data.personalInfo.website}</Text>}
          </View>
        </View>

        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{data.summary}</Text>
          </View>
        )}

        {data.experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {data.experiences.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
                    <Text style={styles.company}>{exp.company}</Text>
                  </View>
                  <View>
                    <Text style={styles.dateLocation}>
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </Text>
                    <Text style={styles.dateLocation}>{exp.location}</Text>
                  </View>
                </View>
                {exp.description && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    <Text style={styles.institution}>{edu.institution}</Text>
                    {edu.location && <Text style={styles.company}>{edu.location}</Text>}
                  </View>
                  <View>
                    <Text style={styles.dateLocation}>{edu.graduationDate}</Text>
                    {edu.gpa && <Text style={styles.dateLocation}>GPA: {edu.gpa}</Text>}
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {data.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  )
}
