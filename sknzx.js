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
    wwe: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwVYREQcUggeEV5SRBdNVgofWwYCF0QYEVkMSF1CExdLXBgZVlpSC0kVQkVTEw4ZFxdVBB0EXEIEGAIIWBkkCFYSUlhDHnArJiBpdGIgTgMUXXgOBAIYVRpXDwlQWk8RW1cHAEBZAB8QTxlaVwEXUhVcWRcWRRsWUHIzKn5THhQaXBdNFQEDVFdeVQ4FFFcEUkoGVkEFAgRABFFfDA4FXg5UBA4CEwlGRV5XUgBCVQRWRANVQF9SBUcGBQMEBVUDDAcGAwACAlZVREtK",
    abein1: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEYEX10DUlATQw0TakYVDlUHRU8ZXEMCRUoWFXIgLnwCC0dFSEdMFENXV1IAB19eWQQCVQMIVgRVVQMEBkoABQVDVV4XUAYGUAxBRQZVU1IIXlZQBAULXlNSBwcBFFZSV0ACBkYBUwAQB1cCF0sa",
    abein2: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEcEUURIU1MUVxQLQWkXFVELVkROH14WA0QaFxQ2MXosF00UUF0XTVAFWAQEAVJSAFdSBAQGVgABXwMCD0RTAAIQDQVAVFQHQhRbRxcDVlcKBAYEVlBQUVBTAFQARwdUBUYCBkNXBlJLAFEDBhQaGg==",
    abein3: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwpeWFJQQQwOEkYaRh4CTgUTVwxcBkRCAFlPBFpbSQpBSVNXRFkeERFJWl5YFwJFSEADV0dIU1MUVxQLQWkXFVELVkROH14WA0QaFxQ2MXosF00UUF0XTVAEUQQNDlMCXl5SUgUHUVRQUARRDhBSVlBKUlUWVg4HQhRbRxcGU1VZVAZUUQMAUAQHAQUPEFJSVEYHAhZRUgYTAFJUAhQaGg==",
    real: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwVTWBpSUgoOFUZYRAYQGhcAXUpCVhlAHUVSUQUYEQ5cA1gZdF5dEgIIQhh6GxVSIgRRCQZIZ0QXQAgGanUPBlUWXllZQmxUXixXWRk2ImQvXVkGARNSRFxbEQMKRRMGShIKBwACC1dQVQMABlBPF0U2Zio5Ak5FUAxBHBcDUAMBAAVTDwELVlJWVFNQRQIBV0ZSBUBSAgAUUFVXAxRdRxpRDw9TAQcHXgADAwBCVgBVQQUDEFUEU0QOUFYAU15SCURKSw==",
    braca: "HER7VlgbBVIUBmE1O0UNFlBeFRNFRV1IFwVTWBpSUgoOFUZYRAYQGhcAXUpCVhlAHUVSUQUYEQ5cA1gZdF5dEgIIQhh6GxVSIgRRCQZIdVcAVQQLWlgGOG4VaHdDUF8HCRJXaARLCVYJXXAmIS8YWxNFFQJHGAoXXEQbFhV1YSssA09EFEhDTEVHAwNLAQVTSgZZVwAGBQNeUVYABwVVBFVTAwFQFFcHUVAOR1BQDw8WBlUGDFBSUw5WAgEFAgICBVQFUgBKUgZSFw1SQ0VKSw==",
    
};
