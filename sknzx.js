const encodedChannelData = {
    SSC1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRoAHgMJBRhSUhUGWQIKQAQWCRlYF0JOCEBCSBEJSVQADgdWUl9XD1UDR1cGU0EMXxNWVgJKAQRfVAJSBFlXGF9ZVVYeSQtGUxReQxUjIHksFx5EFEgWGkVRDlMEC1QCUAQHC1dTAAUOVBAGAl5CDFdAUAVUQwYCVBcMR0UNUwcBBQZXA1MFDwFTFFJSBBRSX0VTDgZHAlhUAA5XARobSg==",
    SSC2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRoDHgMJBRhSUhUGWQIKQAQWCRlYF0JOCEBCSBEJSVYHAVVRVAIFBQQOE1cDUhMMVRZeVANGBwIEDAReVF5fGF9ZVVYeSQtGUxReQxUjIHksFx5EFEgWGkUNdCQhe1MCBQIIdlRTJHIAdzZSdFJHAlczXgFyNnJSJBcMR0VaU1NVUQYBVwYEAwUEEwUOVRMNA0EFUQYQUlRSVwNeURobSg==",
    SSC3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRoCHgMJBRhSUhUGWQIKQAQWCRlYF0JOCEBCSBEJSQMEUgkFV1VTAwIDQFcFBhNVVRNWBQZHAFlUB1NQXwlSGF9ZVVYeSQtGUxReQxUjIHksFx5EFEgWGkUCUgJSXAIHDlZVC1ZTV1ICDkQABQFDAgQRBA4CSwYAVhcMR0UNAwYDBwJVVVRfDlUFRgUCV0sNXkFUUVMWVwNfAQECARobSg==",
    SSC4: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRoFHgMJBRhSUhUGWQIKQAQWCRlYF0JOCEBCSBEJSQIEAQZWB1JRAQUORVdVVxZWVUZSAg8WAFVUUFcGAwFVGF9ZVVYeSQtGUxReQxUjIHksFx5EFEgWGkUAVVFQCgABVA8EUl9TUAUPDkVRU1dABVMUUA8GRFMFUxcMR0VaAA8BAgdVBAVeAAFTF1FTUhEDV0MEBQRKDwUDDVICVBobSg==",
    SSC5: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRoEHgMJBRhSUhUGWQIKQAQWCRlYF0JOCEBCSBEJSQ4PBQkKAwYFA1YBEFcEVksNV0cDVgNLAwABV1JQXgoEGF9ZVVYeSQtGUxReQxUjIHksFx5EFEgWGkVWDl8FDVcFVAYGUgRTAABUVEJaUgVCUgFGBgYGRwAEAxcMR0VZAlQGD1RWVwRUBlYBQVcOUEBVUkcEDlcXVAMDBA5fXxobSg==",
    SSCE1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRpUSxIVBxsGGxcNVEkXUAAXCVJOBlUFCRtYAhMXCUJCGEcCSVFSAVQDSlUOVBQFA0ZRVlBLBAMDAlNRXl5XAA8GA1AESA9YU1MKTVoXFhZLUkVzZD99BB5GFF1HQ0RSVVVSCgNRAFMBVENXAgIUVlFEUg9QEAMCAQICVVBeXhUMFxMDVQRXAVIESloGVhQDVkBVBlcRVAJXVwdWAQFWBwIHABEbGg==",
    SSCE2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRpUSxIVBxsFGxcNVEkXUAAXCVJOBlUFCRtYAhMXCUJCGEcCSV8EAQdSF1FVUEJQU0ZQVVdKV1ZTAAYFBgFWDgQBUAECSA9YU1MKTVoXFhZLUkVzZD99BB5GFF1HQ0QDUg8IAVJeBFIDVRNXUgURDQJFVwMCQQRXUlMPUlcPAhUMFxNQAFdRAlFQFlEBU0RXXhFVUQ5HB1IFAQEBBg1RVVUEAREbGg==",
    SSCE3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRpUSxIVBxsFGxcNVEkXUAAXCVJOBlUFCRtYAhMXCUJCGEcCSV8AB1QAEVBRV0dRAUZVDwITAFUFBgJVXwFXVVIPBFIDSA9YU1MKTVoXFhZLUkVzZD99BB5GFF1HQ0QODlRXV1ABAgIPB0BXDlAUVlVGA1QBR1BWUgEDAVVdAxUMFxNXVVdWAFJTRFpSUEVWVUdeBA9FBFkCV1BUV1xVBg4HUBEbGg==",
    SSCNEWS: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxVEVRpfVhEUS1peQBdOVgxcVQwTClZfCFMFSVtTE0hXE0MZQQAcAwFSAAFQRlABVUFXUxAFVldBUFhXAFRSUQ4DVAUCVFJJDghSUk5cDkcDUBhHUCNlezlTGBQXDEccGlVTBgMIBFNVVQBWAkYFAVVKAVAWVg8HRw9WUAUDAgIORA0WFQIFVFZVBVIPEQEGVEMMXhMDA1AXBlhSVlMDVQlQUQAHE04b",
    daznf1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeQFIfXwpJEUEZVxsVGgQWWkkcAkMZPWI1JRpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGlUWBVsQUF1VCQBJCBNCGEBDTAMDEFFXRwJUUBAHVFMFAlNfXF4FUgEJVgMCBFBVVEMAGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFZWAAZUF1IFA0EEVEBTAAJAAAQEBwMCXwtQDlQFBwdRRVwWFVQWVQVVEAQCRFYHBEsDBQIGVFcFWwVVDgIBUAUGB1dWFA8e",
    usanetwork: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwBEWk4fQBIVA1daGAIGVgQdVwwGERlVHVtOJFpYEwJWEhh1enB1OSgqBxp1JjEaUwEbKxsRUhkRXgAJW1MLT00VVhtSUEASTklbVkUGBkVJH0QDUEsXFDZkLCxQTxRFAkZMFAAJUgRRUlBWD0IFBlRFVVFLUAACQVRUA1YEUAUKAA4AFQsTRAMDAlMFQwAAARECV0JSUlIXBFkGV1cFVVlWAAQHUAoARRtL",
    nbc: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwBEWk4fQBIVA1daGAIGVgQdVwwGERlVHVtOJFpYEwJWEhh1enB1OSgqBxp1JjEaUwEbKxsRUhkRXgAJW1MLT1MIVVUeHl4HFBJTRRgfE1NFXhRFNjV6fRdPEkUPFhxFCFYDA1YAAl4CVAUGUENQBVEQVwMQUwIFRwYDVlZTBgYaXBcUD1ICVQYAVFFXR1dSBkEDBkFRD1RKVFlSDAZVVl5QUgUVTE4=",
    foxpremium: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpfBgMVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGlADHw9STUdNWUZJCBNCGEBDTAADRVVfEVEODkNXWVMHVF5fWVAPBVIIVQQBAwMGUkNUGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRF4ABQUBFlEDBEQCARADDwIXB1QGVwMEXl0HUwFUBlJSRVwWFQ5BWwRQQwxSR1UOVUJVVVcBDgFfCVUPAFQDV1VRUgQBFA8e",
    fox1mx: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpfBgMVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGlkFCEADAgVASFxJCBNCGEBDTFFQSg1VE15TAUIABVMEDwZfDFBTAQQJVQdVVFNWBUEGGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFUAVFNXE1BVAhMEA0JUBQUTU1FWBFRUVgACBlJVBgJQRVwWFQ5FUQECFAMCEwECVEtSAgIEAwEFDgdWD1EJAwQDUwVRFA8e",
    fox2mx: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpfBgMVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGkICF1IXUlwGSEBJCBNCGEBDTFReEQ1WR15VVxdTVlMMV1ZeDlcFVAYECl5TXwMPA0sCGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRF9eBQFQEFMDA0QGAxFRA1VLUFkGBg8CAQBQAwZTBFYERVwWFVJGBQdSEVFSRAQCBEEHA1BWUgFSC1ICA1VUUlNfUAQGFA8e",
    fox3mx: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpfBgMVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGkEeBV8cB1lFQwtJCBNCGEBDTAUBRFBWRFYFVxBSVVNTA19fC18GAVEJUlNfU1QOA0cFGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFZXVQ9VQwAFAhQEVEpSVFBDU1dTUQJTBVpfVAVWAgpTRVwWFQNFVQ5QQQQBFAVTVUZUUwFRDl5TDV8FD1MIUgUCVgAEFA8e",
    laligatv: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGlAXCVweWkxAB1xJCBNCGEBDTABXEwFXEFZVUhMPVVMDBF8FAAMAUwEHUgRTVgAOAkNaGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRAEFBwVXS1dUU0NRV0pfAlIQUwBfVA4DXgwAB1cFBgQCRVwWFVARUwNSFlJXRVBSAUQAWFEDAAVWWlQEBlIIUgdUXwYGFA8e",
    laligahype: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGkISVw4QQlRQVwpJCBNCGEBDTABRRAwBRlBTBEpTUlMAD1BeW1YABFICBVcBVVIEVRdQGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFECBg9UQFUCBkQCVEsCBAQWV1YEDQ5XAw1SDgdSAldURVwWFQYRWgVSRwIEE1YDVEsDB1QDAV5eC1EGBlIGUAAFBQ8DFA8e",
    dlaliga: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeQFIfXwpJEUEZVxsVGgQWWkkcAkMZPWI1JRpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGkENAFMKVUJBWVtJCBNCGEBDTAFSSwNURAYGU0ACAlMFU1NfDlNWDgdXVQJQU1MAUhdUGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFNVUgZVQQEFUkAEUBQBBA4QBFMEVlACVg8CBAYFAgVRRVwWFQEQUlFfR1JRF18GBkcPVVAGVFZWDAUGAFYDBgVfVA9WFA8e",
    laligahype2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeQFIfXwpJEUEZVxsVGgQWWkkcAkMZPWI1JRpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGkEIElIQXFBZXF1JCBNCGEBDTAZTQ1ZSQAEHDhMHBFNQD1BfDVYFBw4GAV8CAwIPUhFbGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFcEB1FSFwJSAkFSARFSBlNLV1dRVlBWXgteUwMAUFIARVwWFQRKBgQEEAxfEwUAVEYBVwUNBwYFAAdWBgEDBwVTAgEGFA8e",
    dazn1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGlQKCV0KWANUBlJJCBNCGEBDTAQEFwYEFgQDA0oPB1MDB19eC1QFVFMCBFdQBQEAD0dUGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFNSUlMPEQcEUEJWV0oGDwBKUwADBAdSAV1eA1NUV1cDRVwWFVQUBQZeE1ZXE1IGVRQHVQINAl9UAF9VBwIDCldUAFIHFA8e",
    dazn2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpSEgUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGk4JDAwLDlRZSUdJCBNCGEBDTAMEF1BQEFAEBEtXVFMDA1UFAQRVBgIDAgMDVQ5VUkYHGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFcDV1UDE1BRVBcHBUYFVgMWAlMDAQYEBgtWUwcABARXRVwWFVBBBQdRQ1ACFl5VAUJTWVYDBlJeCAICDgcDVgUDBwBTFA8e",
    arena1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxFSVENHQBIVA1daGBALQwIeUQQdChlUExkJC0YASAZKA1lXBh9eFgNEGhcUNjF6LBdNFFBdF01QVVBfVwAGBg9VDlRSBVBWBVEBAwBCVlEEFFZSFlFVAEoUW0cXU1NWW1VWAFEGBlVVBARSBRNbBV8WDVJKVwYERlVZXlEUGho=",
    arena4: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxFSVENHQBIVA1daGBALQwIeUQQdChlUExkJC0YASAZKA1lXAx9eFgNEGhcUNjF6LBdNFFBdF01QVVBfVwAGBg9VDlRSBVBWBVEBAwBCVlEEFFZSFlFVAEoUW0cXU1NWW1VWAFEGBlVVBARSBRNbBV8WDVJKVwYERlVZXlEUGho=",
    arena2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxFSVENHQBIVA1daGBALQwIeUQQdChlUExkJC0YASAZKA1lXBR9eFgNEGhcUNjF6LBdNFFBdF01QVVBfVwAGBg9VDlRSBVBWBVEBAwBCVlEEFFZSFlFVAEoUW0cXU1NWW1VWAFEGBlVVBARSBRNbBV8WDVJKVwYERlVZXlEUGho=",
    arena3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFxFSVENHQBIVA1daGBALQwIeUQQdChlUExkJC0YASAZKA1lXBB9eFgNEGhcUNjF6LBdNFFBdF01QVVBfVwAGBg9VDlRSBVBWBVEBAwBCVlEEFFZSFlFVAEoUW0cXU1NWW1VWAFEGBlVVBARSBRNbBV8WDVJKVwYERlVZXlEUGho=",
    bnextra: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwVYREQcUggeEV5SRBdNVgofWwYCF0QYEVkMSF1CExdLXBgZVVRaCEoKX0FTXABTCVxCEgETRVMTWxJJVlkKSFQPQVMYVwMABFAHVgZfAQZRQxlTFwJRGxNTVFcYAFNRW1JRDgMDUVVQSVpeQBdNXhQfWEgUV1FVRAcAVxhUVlEJSwNTUlceBwJTBhoARlVUUxQMU0AFBAFcWxEDFxpHRXw0en1SSEBEXUZNFQNGBlFfRwMFRVNUBhEABFQCVFdTCFQFVw8GBFZfVQ4FFEhDFVBDBgQTX1QCRQYEXlNQUwEIXg4HAlQEB1ACDwZQFFAERQ9J",
    ziggo6: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwtWUQcCHRIRHhhHRBZNQxFcWwMbA1gYHFpOEF0BAVMNUlQCAUVEV1dUAgcHS1sAXi0DUkVRDwBKAFdIZXozMRdeARkFAwdJVFQEBgRGUgJVQxtUQFUGBEYHVFUEGAoXXFlWVVReRggTD1hRWU8dSTFAGlcMMmVYNmkAAUBZFDBwAG4DeHRCND8pQVFXQlJUXxNXUkQEUQJHB1ADUAVeBAoFA1cEUlIEVVEOSV8kG3wNEEABQABPaRZvJxZ8GxETDSUDdUICcCk+IlxtVwVVdDgZe1UmVUBbQQYHEFoHBBN8V1BEaFQBNhUBYl8CSlsBUBEHVkVQUQURBVVfAQRXVAlQBQVUUwEDV1BVDgwnN3RLUBhHUCNlezlTGBQXDEccGldWBlFXUlNUVFdWBEZaD1NLBF9AUVIEFAAAVAJQUAQBRA0WFVALBQIFBABUEVRTU0UNV0sEAlRCUlkBAQFUBQxVUg5TE04b",
    ap3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEcFV0pIU1MUVxQLQWkXFVELVkROH14WA0QaFxQ2MXosF00UUF0XTVAHBARQBQIEWlIGAA4IVl5SU1UBUhFaVlVKB15CXwUHQhRbRxdUBlcABFIBAQZWVwZTUw8PRVQAAkQMBkReDg4TDgJWDBQaGg==",
    ziggo1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwtWUQcFHRIRHhhHRBZNQxFcWwMbA1gYHFpOEF0BAVMNUlQCAUVEUVJXAA8HSltoSkQGUEBeDwZKDk43eWIxSABQGAQFBRxVVVQHBQJDVg5XXQdVQFYFAkMDWFcbWxcDBwdUVVhEXRIOCFBYCwwdYVVcBBkDBVRFOF4+DWADJF56BW1VDgQKAzgRV1ICRgEDX0QDBUFTBgETV1ZRVwMDBQoCVgQHV1ZSUQVIfGwIN2ANMAwWNlZNUhVUKw1nZjErcj4aQmEBQg8pX2R1fjE8XhQXcxUBCmNlIFwLVwNZICNMIVtGZHJhISgRcAQAQFVUAUIMUhFXD1JCBFUEAlNTBlkAVAcPUgBUU1IGDWMmIBtFXhRFNjV6fRdPEkUPFhxFXQAEAlZUClcFUlAFAkNWUl9GB14QVVZSQwZUAgICX18aXBcUBQUAVFNeUg9SF1JRAUpXUBFSDwEXU1NXAAFUVg9TBQUVTE4=",
    abein1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEYEX10DUlATQw0TakYVDlUHRU8ZXEMCRUoWFXIgLnwCC0dFSEdMFENXV1IAB19eWQQCVQMIVgRVVQMEBkoABQVDVV4XUAYGUAxBRQZVU1IIXlZQBAULXlNSBwcBFFZSV0ACBkYBUwAQB1cCF0sa",
    abein2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEcEUURIU1MUVxQLQWkXFVELVkROH14WA0QaFxQ2MXosF00UUF0XTVAFWAQEAVJSAFdSBAQGVgABXwMCD0RTAAIQDQVAVFQHQhRbRxcDVlcKBAYEVlBQUVBTAFQARwdUBUYCBkNXBlJLAFEDBhQaGg==",
    abein3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEADV0dIU1MUVxQLQWkXFVELVkROH14WA0QaFxQ2MXosF00UUF0XTVAEUQQNDlMCXl5SUgUHUVRQUARRDhBSVlBKUlUWVg4HQhRbRxcGU1VZVAZUUQMAUAQHAQUPEFJSVEYHAhZRUgYTAFJUAhQaGg==",
    tnt3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpaDxUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGloUA1kVVUBQXUVJCBNCGEBDTFUFRwBfE1QBBERVBVMCBl8GXgRVDwNQBl4DUQdTVRdaGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFMDDw4FEwIPBENSVUtSUQ4QD1UCDVNeAg4AAVIHU1UDRVwWFQ5EAgYCFgICS1FUVxNUWQJXB1dXAQBSAwQBV1QEAAJRFA8e",
    ziggo2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwtWUQcCHRIRHhhHRBZNQxFcWwMbA1gYHFpOEF0BAVMNUlQCAUVEVFFQBwYBSlsDOF8FXkVVDwdLBVBRGmYrM25JDwAYAwFSSFUEBQdAVwZSRARIQVUFB0ACUFIDBkkKSAIIV1RSXBMJEl9ZUB1eSRkkBklCGXheMwclIQFFEShiFkd9T1MeEkooUUAHRldUBBcAU0NVBlVEBVNfAVdUVFxTAwMEBQpVAlNVD0hDPHEKHkFSIgJBfj9vDyJcDz04cD4FUVh6cgJXMH5kQwo5egg7VyYqBFZBK0AmVlhTFiBIVFJnBXhRDg0QXgBTR1pSUBQCAxRUUwNFUFNUVAVVVwpSVlIBBlVWAVcPU1VINmMkXhZLUkVzZD99BB5GFF1HQ0QEVVFQC1BVU1ABA0JXB1EXVgFEBgNSQ1MAUAYBAVIPVBUMFxMDU1RSUwACRQAAVxAHUUYGVgFAB1ECBFQBVAlfBlJRAREbGg==",
    go3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwVTWFtTHRIRFlpWTxoMWgJcWBNdC15AFxkEA0YZMzELOWRGWENHOS8iaX9gMUxwKEFrKzsxcmk2dzIvancxJBcyYQVoYkMJFRJpf3ItK2EkXFkXFkUbFlByMyp+Ux4UGlwXTRUHAlYGAgEOU0BVVl9GUgRFXwVVSw5WUwADAlUJBw8AVRMJRkUCBFMCEwBUURcDXkZTAFRHAwdUUwMEVwpQAFdRAQUAUkRLSg==",
    go2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwVTWFtTHRIRFlpWTxoMWgJcWBNdC15AFxkEA0YZMzELOWRGWENHVDgucmh+JCAYID0HOD4uYXMtciA0fWkmMXtJY2AEbmAWCBRCBWk6J2gvJHdJHxdTFF4WQyNneywCQRUVDBdKEVUBBQNUU0pbVgJAAFNEV1VXFFdVUwJUUlRZBAJQAgULRF1GFAMBRAICUhdSUEAEAlNAAQRUBAZRUQAEBgABBlcHUVcDFUsP",
    telemundo: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwBEWk4fQBIVA1daGAIGVgQdVwwGERlVHVtOJFpYEwJWEhh1enB1OSgqBxp1JjEaUwEZEUBIe18EU04EXVcJCV0KH11BVFJPSAtXREIXERkKAlBFXkcVciB7KgJMRUVdGB0VVVIGUgRUVgQFU0VWBFRCA15LUFEDSlcHAgUGVgVZBQMUDRERUVUCAAQHE1UBAkQHUhFRBw5ADwBXU1NQUAhTAgcBUgJEGhs=",
    tnt1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpaDxUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGkEBX00VVlECAFZJCBNCGEBDTFUDQVZXEVQGAhRQB1NXVFYGWlIBDwQCBl4BVVVTBBZQGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRAYDBAEORlZVA0EHV0FfVg8RBlZQAVdXXgBXBwYAAwpSRVwWFQBBAlRRRAYDFgIEB0JVBwUBVQRRXl9VAgRTAFJWXwBTFA8e",
    tnt2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpaDxUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGlBXFk4NRURWCVlJCBNCGEBDTFFfFFVWRQEHDkUDV1NTA1YGWVJTA1QGA1YFAwIEUxFXGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFECBwAGSgEGX0dXURFTUwEQBVZRBQZSVQgFAFVUCAAFRVwWFQcTAlQCQgEBR19TDhdSBAEMAF5QXgICBFRTA18BUgIGFA8e",
    ziggo3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwtWUQcDHRIRHhhHRBZNQxFcWwMbA1gYHFpOEF0BAVMNUlQCAUVEUldRAwIARVMAOF8HX0NQBA5DB1BIZXozMRdeARkFAwdJVFQEBgRGUgJWQxtUQFUGBEYHVFYEGAoXXFlWVVReRggTD1hRWU8dSTFAGlcMHmFfQlIsPwFfBCgNLVYPUggBIzYAUQ8OQ1FSVhEFV0ZTUQEWBVRQBQBRUw9UUgVSVApfAgACSQQWMXVeNxkRNhNYdxBvDVYDDysFWyxHTmJWZDAtElRSYy0zWw81UiknAVtGGkANDXpUUjFZI19ORUR2Mj4hD0ZVEQBWAUdXUhBRAgMQUFZSBQICAw8DVANWAFcCUF8OUQwnN3RLUBhHUCNlezlTGBQXDEccGlJTVFJQBwRSUQcEV0YCVlYTUVQTVQICRlUFUgcEAQQPRA0WFVALVVVVU1YPSwEFA0QGV0IGAw4XBwMEBwFUVQoCAgIPE04b",
    tnt3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpaDxUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGloUA1kVVUBQXUVJCBNCGEBDTFUFRwBfE1QBBERVBVMCBl8GXgRVDwNQBl4DUQdTVRdaGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRFMDDw4FEwIPBENSVUtSUQ4QD1UCDVNeAg4AAVIHU1UDRVwWFQ5EAgYCFgICS1FUVxNUWQJXB1dXAQBSAwQBV1QEAAJRFA8e",
    tnt4: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwlDQlUfXw8RAxhUUFwUQEkTXRFfBFNYXFgEExpaDxUVCF5CRV4cCg4QUxhVHgpSCQZHSBYGRF5dUw8EGl9VF1sMRQJHVAZJCBNCGEBDTA5WQFFeFgUCABYBVFMFBQVfWV9WVQdQBFdeVwcHUEFVGAQXWgRcCkdSUBpBRXFkKixdH0QUDRFIRAJVB1YDE1sGBBNSAUcDBwEXV1NTBAcGUg9XUVUFVAZfRVwWFQ9EAAICFAJeRlAOAUEEAAICBVMBAVAFAQMJUFdeUQQOFA8e",
    universe: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwBEWk4fQBIVA1daGAIGVgQdVwwGERlVHVtOJFpYEwJWEhh1enB1OSgqBxp1JjEaUwEZEUBIe18EU04EXVcJCV0KH0NZWEUDFRVZGlMTEENOXVkGARNSRFxbEQMXGkdFfDR6fVJIQERdRk0VV0ZRAVFLUQYUAlMBQQJYUwwPBgZaUVNQAgkLBFQFVVEUSEMVVxRWARRWAwUXVAVXDAFXUQgHBAEAVAcHAwMGBAVAWw9FD0k=",
    ap4: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEcFVkNIU1MUVxQLQWkXFVELVkROH14WA0QaFxQ2MXosF00UUF0XTVAFU1UAUF9UDwcDVA4EV1ACUgABDkEAAlRKBV8RVgAHQhRbRxcFAlZaUwBVBwcFX14FAVICQltSUBNVU0sBUQNFUlUBARQaGg==",
    skylaliga: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwdcVxpdWhACVxtYQgZNXh0IXQAdSUNAXQROCEBCSBIXAlZFXx5gLT5LZWd5IDdkSkMCSjojGFIXUAASWUJJCkgCFRoXE3c0Ki1TTkVQWRccUFdfSgNUABEAV19WVwRUWlIBDlMFUlIEUVMGAUQFUVQWFl1SRQZXF1RWVAxSAlVbVwNTUwFSAlFTDlRXSlMDVEAEXxZfFUsP",
    tsn3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwdVWwJJBh4GB1dWVxMCVgoUWh0eDE5FQAMMUFQDSQhMElIYW1hFA0kFUBlBBU1WDgQZBBYJGVgXQk4XUU5KCVESRVkYXVoQAklVW18XDUMUXVAGAQ8YUxxVTgpHRQweSxBYQk8eXBMTSUAGGRMHAl9LAlYQAw9QFgJZAwcPU1NdUgEHVAEAUgVeDwYCXQBSCREaCgIDFRpSFCU1eH0CHktEDRZME1dfV18BVgcQVFNXRlZQRV8BVEAPB1VXBgJWDVMEBwFVEVxHRAQAD0RaAgIQUVcUBQZUEQNWXwICVVVaUFUDDlJWXgZeFEpL",
    bein1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwcGBAVQWhAIEkJbXxwGVhVfVUkTDFZbE18JAxtYAhMXKWNidR5AHwNLWF5CAAwYCxtCAl0EW18XWBUUGlIGFFBJUlhUHkMRAxBSDlAfVkJIHUETXREGGUdTU1UNAlIDWQQEAAMJUV4GUQYEBRQHAl5ABwNEVVMHXVUECVYYChdcRBsWFXVhKywDT0QUSENMRRQNUksDVFIWBwIGDVVfXg5TD1VTBwZXAgIFAVNAWwJWUA5HUAZWAhFQVFFWU1AEDVQFVw5UBVNfVFUDBEdQAAUXB19DRUpL",
    no3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwhbTF5UR0sLD0BSGBMIVgoTXR0XAxlYF0JOKwcCSAYBVQMDBwhVSQMCBg5QEQZWSRtHCh5IGVsCUkNLFRQjNXUtUk9EEwlGHERVVA9GWgVfEwVREQEDDxZSAFEMDlEFAVFVUAcFBF8CVBQNFlBUVF5DAFNFVlYFEwRXUQUFA1ALVlNSAVMHAFNQD1UDQkFKGg==",
    bein2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwcEAFZYRQkTElpeWBcCRUoTGgYZBlpXG14FSVtTE0h3MmN0GEJKAkoIX0NEHUxbDgRRSBELXlMcQhJIUVcUDxcDWVUYB1UECRQFUl9GARgIB0BIBFYYA0VSUwZQD1EGDAVUAgUCA15fV1VTDkJSVVRKDQIWAQEZEVMPBBtbFwMaShcUc2N+LQIfRRUMUhgVXhNSA0VVUQRCA1ZUBQZWBApVAQEFVQFXUl4ODgQTVlFFSBRFSwVUBUBSB1MNV1UCXgdUBQcBBFQFUVMCVURbBAURUFZQGko=",
    bein3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwcPBVZYRQkTElpeWBcCRUoTGgYZBlpXG14FSVtTE0h3MmN0GEJKAkoIX0NEHUxbDgRRSBELXlMcQhJIUVcUDxcDWVUYVloBHxVdB1oLAhgIB0BIBFYYUhQBVAMNDlAFWwMDAgQGUV4BAlAEAkcCUlNHAVZDVFUZEVMPBBtbFwMaShcUc2N+LQIfRRUMUhgVUxAGV0FUBgARAlYEBgFXBgkDVQ8HCAQFV1EGUwFAUQFFSBRFRFABU0QBWVRTBFRQAF9UUlEFVQBXUg4BBUpVBlNHUQNQGko=",
    nova2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwJWRV8DHQcJEl9cGAEIGBQGRgITChhYBF8FDlRpCQhOB2hFR15BElVJRltXCw9eFAZrBBcJVBgfRgVFGRZFI2orfFNOQhFcRx0UBgdAUQRURgBSR1EBAUUOWV4MBldWCVQFBQQFB1NSUAAVDFJBAwVKBFBAU1MGF1BZUVdVBVVbVAZQAAgKXwNQAQAFSwcVGg8=",
    laligatv: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwdVVVtJVwwGB1dWVxMCVgoZRQVEHgNGRF8EVU9dSQhMElUYW1hFA0kFUBlBBU1WDgQZBBYJGVgXQk4DQFRKCVESRVkYXVoQAklVW18XDUMUXVAGAQ8YUxxVTgwFUhIdXwBSXFAeXBMTSUAGGUVTVlJCVlYQA1YPRgJXVQ1UXwIPAwEAVlMHVlFfAgYPXQBSCREaCgIDFRpSFCU1eH0CHktEDRZMEwVUVwMDBlRKUQJeRABQR1IGARMEVgZUAlVSW1MFBA8BEVxHRARVDxACD1ZDUV4RUlZTE1ACX1RTVgUPV1RSVFAHAlEHFEpL",
    
};
